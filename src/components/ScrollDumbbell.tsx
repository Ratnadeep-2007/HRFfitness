"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"

export function ScrollDumbbell() {
  const dumbbellRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const isLight = resolvedTheme === "light"

  useEffect(() => {
    setMounted(true)
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (dumbbellRef.current) {
            const scrollY = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrollFraction = docHeight > 0 ? scrollY / docHeight : 0

            // Rotate based on scroll: 0 to 720 degrees
            const rotation = scrollFraction * 720
            
            // Translate vertically slightly to give a floating/parallax effect
            const translateY = (scrollFraction - 0.5) * -150

            dumbbellRef.current.style.transform = `rotate(${rotation}deg) translateY(${translateY}px)`
            
            // Show only if we scrolled past the Hero section and before the contact section
            const show = scrollY > 300 && (docHeight - scrollY > 400)
            setVisible(show)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    // Run initial call
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (!mounted) return null

  return (
    <div
      ref={dumbbellRef}
      className={`fixed right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 pointer-events-none transition-opacity duration-500 w-24 h-24 md:w-36 md:h-36 ${
        visible ? "opacity-10 md:opacity-20" : "opacity-0"
      }`}
      style={{
        mixBlendMode: isLight ? "multiply" : "screen",
        filter: isLight ? "invert(1) hue-rotate(180deg)" : "none",
        willChange: "transform",
      }}
    >
      <Image
        src="/dumbbell.png"
        alt="Decorative Scroll Dumbbell"
        width={144}
        height={144}
        className="object-contain"
        priority
      />
    </div>
  )
}
export default ScrollDumbbell;
