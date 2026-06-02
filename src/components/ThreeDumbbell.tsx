"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
// @ts-ignore
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js"

interface ThreeDumbbellProps {
  onProgress?: (percent: number) => void
  onLoaded?: () => void
  isDismissed: boolean
}

export function ThreeDumbbell({ onProgress, onLoaded, isDismissed }: ThreeDumbbellProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)
  
  // Keep track of dismissal state in a ref for the animation loop
  const isDismissedRef = useRef(isDismissed)
  useEffect(() => {
    isDismissedRef.current = isDismissed
  }, [isDismissed])

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    let width = container.clientWidth || 300
    let height = container.clientHeight || 300

    // Scene
    const scene = new THREE.Scene()

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.z = 6

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    container.appendChild(renderer.domElement)

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    // Main Key Light (White)
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.8)
    keyLight.position.set(5, 5, 4)
    scene.add(keyLight)

    // Accent Rim Light (HRF Flame Red: #E8420A)
    const rimLight = new THREE.DirectionalLight(0xe8420a, 4.0)
    rimLight.position.set(-5, 3, -4)
    scene.add(rimLight)

    // Subtle Fill Light (Warm white)
    const fillLight = new THREE.DirectionalLight(0xffe3d1, 0.8)
    fillLight.position.set(-3, -3, 2)
    scene.add(fillLight)

    // Group to hold the model
    const group = new THREE.Group()
    scene.add(group)

    // Mouse interaction variables
    const mouse = { x: 0, y: 0 }
    const targetMouse = { x: 0, y: 0 }

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates (-1 to 1)
      targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1
      targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener("mousemove", handleMouseMove)

    // GLTF Loader
    const loader = new GLTFLoader()
    loader.setMeshoptDecoder(MeshoptDecoder)
    let dumbbell: THREE.Object3D | null = null
    let autoRotationSpeed = 0.005
    let dismissalRotationSpeed = 0.0

    loader.load(
      "/dumbell_3d.glb",
      (gltf) => {
        const model = gltf.scene

        // Center geometry of the model
        const box = new THREE.Box3().setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())

        model.position.sub(center) // Center mesh inside its local group
        
        // Scale helper
        const maxDim = Math.max(size.x, size.y, size.z)
        // Adjust model scale to fit nicely in 3D viewport
        const targetScale = 3.6 / maxDim
        model.scale.setScalar(targetScale)

        group.add(model)
        dumbbell = model

        if (onLoaded) {
          onLoaded()
        }
      },
      (xhr) => {
        if (xhr.total > 0 && onProgress) {
          const percent = Math.round((xhr.loaded / xhr.total) * 100)
          onProgress(percent)
        }
      },
      (err) => {
        console.error("Error loading GLTF model:", err)
        setError("Failed to load 3D model")
      }
    )

    // Animation Loop
    let animationFrameId: number
    const clock = new THREE.Clock()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      // Smooth mouse interpolation (lerp)
      mouse.x += (targetMouse.x - mouse.x) * 0.05
      mouse.y += (targetMouse.y - mouse.y) * 0.05

      if (dumbbell) {
        if (isDismissedRef.current) {
          // Accelerate rotation when dismissed
          dismissalRotationSpeed += 0.005
          autoRotationSpeed = 0.08 + dismissalRotationSpeed
          
          group.rotation.y += autoRotationSpeed
          group.rotation.x += autoRotationSpeed * 0.3
          group.rotation.z += autoRotationSpeed * 0.1
          
          // Shrink size slightly as it rolls away
          const currentScale = group.scale.x
          if (currentScale > 0.01) {
            group.scale.setScalar(currentScale - 0.015)
          }
        } else {
          // Slow continuous idle rotation
          group.rotation.y += autoRotationSpeed

          // Tilt model slightly towards the mouse
          group.rotation.x = mouse.y * 0.3
          group.rotation.z = -mouse.x * 0.2
        }
      }

      renderer.render(scene, camera)
    }

    animate()

    // Resize Handler
    const handleResize = () => {
      if (!container) return
      width = container.clientWidth
      height = container.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    const resizeObserver = new ResizeObserver(() => {
      handleResize()
    })
    resizeObserver.observe(container)

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      resizeObserver.disconnect()
      cancelAnimationFrame(animationFrameId)
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      
      scene.clear()
      renderer.dispose()
    }
  }, [onLoaded, onProgress])

  if (error) {
    return (
      <div className="flex items-center justify-center text-center p-4 border border-dashed border-red-500/30 text-red-500 font-mono text-xs w-full h-full bg-red-950/10">
        {error}
      </div>
    )
  }

  return <div ref={containerRef} className="w-full h-full" />
}
