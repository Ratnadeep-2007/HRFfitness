"use client"

import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const stats = [
  { value: 6, label: "Programs", suffix: "+" },
  { value: 500, label: "Members Transformed", suffix: "+" },
  { value: 5, label: "Years Coaching", suffix: "+" },
  { value: 100, label: "Expert-Led", suffix: "%" },
]

function Counter({ value, suffix, label }: { value: number, suffix: string, label: string }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      let start = 0
      const end = value
      const duration = 2000
      const increment = end / (duration / 16)
      
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      
      return () => clearInterval(timer)
    }
  }, [inView, value])

  return (
    <div ref={ref} className="flex flex-col gap-1">
      <div className="font-display text-4xl md:text-6xl font-extrabold text-accent">
        {count}{suffix}
      </div>
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
        {label}
      </div>
    </div>
  )
}

export function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="about" className="py-24 bg-charcoal overflow-hidden w-full">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center fade-in-up",
            inView && "visible"
          )}
        >
          {/* Left Column: Copy */}
          <div className="flex flex-col gap-6">
            <span className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase">
              MORE THAN A GYM
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
              Built for Every Body. <br /> Coached for Every Goal.
            </h2>
            <p className="text-body text-lg leading-relaxed max-w-xl">
              HRFitness isn&apos;t just a place to work out. It&apos;s a performance environment where every session is coached, every member has a plan, and no one trains alone. Whether you&apos;re picking up a barbell for the first time or training for competition — this is where you belong.
            </p>

            {/* Stat Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-8 border-t border-border pt-12">
              {stats.map((stat) => (
                <Counter key={stat.label} {...stat} />
              ))}
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] overflow-hidden group">
             <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ 
                backgroundImage: `url('/gym.jpg')`,
              }}
            />
            <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/0 transition-colors duration-700" />
            <div className="absolute -left-px top-0 w-[3px] h-full bg-accent" />
          </div>
        </div>
      </div>
    </section>
  )
}
