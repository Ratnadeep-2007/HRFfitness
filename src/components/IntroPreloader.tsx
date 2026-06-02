"use client"

import { useState, useEffect } from "react"
import { ThreeDumbbell } from "@/components/ThreeDumbbell"

export function IntroPreloader() {
  const [isDismissed, setIsDismissed] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [is3dLoaded, setIs3dLoaded] = useState(false)

  useEffect(() => {
    // Disable scroll on mount
    document.body.style.overflow = "hidden"
    setIsLoaded(true)

    return () => {
      // Re-enable scroll on unmount just in case
      document.body.style.overflow = "unset"
    }
  }, [])

  const handleStart = () => {
    setIsDismissed(true)
    // Re-enable scroll
    document.body.style.overflow = "unset"
  }

  if (!isLoaded) return null

  return (
    <div
      className={`fixed inset-0 bg-black z-[10000] flex items-center justify-center transition-all duration-[3000ms] ease-out ${
        isDismissed ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6 text-center px-4">
        
        {/* Loading Stage */}
        {!is3dLoaded && (
          <div className="flex flex-col items-center text-center">
            {/* Spinning ring placeholder */}
            <div className="w-16 h-16 rounded-full border border-t-accent border-r-transparent border-b-transparent border-l-transparent animate-spin mb-6" />
            <span className="font-mono text-[10px] text-accent tracking-[0.3em] uppercase block mb-2 animate-pulse">
              Forging the iron
            </span>
            <div className="w-48 h-1 bg-neutral-900 border border-neutral-800 rounded-full overflow-hidden mb-2">
              <div 
                className="h-full bg-accent transition-all duration-300 ease-out" 
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <span className="font-mono text-[10px] text-body tracking-wider">
              {loadingProgress}%
            </span>
          </div>
        )}

        {/* Pulsing, Glowing Circular Button Wrapper */}
        <button
          onClick={handleStart}
          disabled={!is3dLoaded}
          style={{
            transform: isDismissed 
              ? "translateY(-120vh) rotate(-720deg) scale(0.4)" 
              : "translateY(0) rotate(0deg) scale(1)",
            opacity: isDismissed ? 0 : 1,
            transitionProperty: "transform, opacity",
            transitionDuration: "4500ms",
            transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)",
          }}
          className={`relative group flex items-center justify-center w-64 h-64 md:w-80 md:h-80 rounded-full cursor-pointer focus:outline-none ${
            !is3dLoaded 
              ? "absolute opacity-0 scale-90 pointer-events-none" 
              : "opacity-100 scale-100"
          }`}
        >
          {/* Concentric rings */}
          <div className="absolute inset-0 rounded-full border border-accent/20 scale-100 group-hover:scale-105 group-hover:border-accent/40 transition-all duration-700 animate-pulse" />
          <div className="absolute -inset-4 rounded-full border border-accent/5 scale-100 group-hover:scale-115 transition-all duration-1000 animate-ping" style={{ animationDuration: '4s' }} />
          
          {/* Background Glow */}
          <div className="absolute inset-8 rounded-full bg-accent/5 filter blur-xl group-hover:bg-accent/10 transition-colors duration-500" />
          
          {/* Main 3D Dumbbell */}
          <div className="relative w-56 h-56 md:w-72 md:h-72">
            <ThreeDumbbell 
              onProgress={setLoadingProgress} 
              onLoaded={() => setIs3dLoaded(true)}
              isDismissed={isDismissed}
            />
          </div>
        </button>

        {/* Dynamic prompt text below the dumbbell */}
        <div className={`transition-all duration-700 delay-300 ${
          (!is3dLoaded || isDismissed) ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'
        }`}>
          <span className="font-mono text-[10px] md:text-[11px] text-accent tracking-[0.3em] uppercase block mb-1">
            Tap the Dumbbell
          </span>
          <span className="font-display font-extrabold text-xl md:text-2xl text-white tracking-widest uppercase">
            To Begin Transformation
          </span>
        </div>
      </div>
    </div>
  )
}

export default IntroPreloader;
