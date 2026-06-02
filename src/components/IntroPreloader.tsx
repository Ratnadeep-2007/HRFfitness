"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function IntroPreloader() {
  const [isDismissed, setIsDismissed] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

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
      className={`fixed inset-0 bg-black z-[10000] flex items-center justify-center transition-all duration-1000 ease-out ${
        isDismissed ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6 text-center px-4">
        {/* Pulsing, Glowing Circular Button Wrapper */}
        <button
          onClick={handleStart}
          className={`relative group flex items-center justify-center w-40 h-40 md:w-52 md:h-52 rounded-full cursor-pointer focus:outline-none transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
            isDismissed ? "-translate-y-[120vh] rotate-[-720deg] scale-75 opacity-0" : "translate-y-0 rotate-0 scale-100 opacity-100"
          }`}
        >
          {/* Concentric rings */}
          <div className="absolute inset-0 rounded-full border border-accent/30 scale-100 group-hover:scale-110 group-hover:border-accent/60 transition-all duration-700 animate-pulse" />
          <div className="absolute -inset-4 rounded-full border border-accent/10 scale-100 group-hover:scale-125 transition-all duration-1000 animate-ping" style={{ animationDuration: '3s' }} />
          
          {/* Background Glow */}
          <div className="absolute inset-4 rounded-full bg-accent/5 filter blur-xl group-hover:bg-accent/10 transition-colors duration-500" />
          
          {/* Main Dumbbell Image */}
          <div className="relative w-32 h-32 md:w-44 md:h-44 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-12 active:scale-95">
            <Image
              src="/dumbbell.png"
              alt="Start HRFitness Journey"
              fill
              className="object-contain"
              priority
            />
          </div>
        </button>

        {/* Dynamic prompt text below the dumbbell */}
        <div className={`transition-all duration-700 delay-300 ${isDismissed ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <span className="font-mono text-[10px] md:text-[11px] text-accent tracking-[0.3em] uppercase block mb-1">
            Tap the Iron
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
