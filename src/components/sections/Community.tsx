"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

const events = [
  {
    title: "HRF Throwdown",
    description: "Our in-house CrossFit-style competition. Test your fitness. Meet your limits.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop",
  },
  {
    title: "Young Guns",
    description: "Youth athlete training and competitive exposure for the next generation.",
    image: "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=2128&auto=format&fit=crop",
  },
  {
    title: "Beach Day",
    description: "Outdoor WODs, sand, sun, and community. Fitness without walls.",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Opening Day",
    description: "Annual celebration of the HRF family. A tradition of showing up.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
  },
]

export function Community() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="community" className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <span className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase">
            MORE THAN TRAINING
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl max-w-2xl">
            HRF is a Tribe.
          </h2>
          <p className="text-body text-lg leading-relaxed max-w-3xl">
            We don&apos;t just train together — we compete, celebrate, and grow together. From our signature Throwdown challenges to beach workouts and community opens, HRF is where fitness becomes a lifestyle.
          </p>
        </div>

        {/* Event Grid */}
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {events.map((event, index) => (
            <div
              key={event.title}
              className={cn(
                "group relative aspect-square overflow-hidden bg-surface fade-in-up",
                inView && "visible"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                style={{ backgroundImage: `url('${event.image}')` }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {event.title}
                </h3>
                <p className="text-white/80 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Strip Placeholder */}
        <div className="mt-16 overflow-hidden relative">
          <div className="flex gap-4 animate-scroll whitespace-nowrap">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i} 
                className="w-64 h-40 bg-surface flex-shrink-0 grayscale hover:grayscale-0 transition-all cursor-pointer"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1574680077505-ef74a569575a?q=80&w=2070&auto=format&fit=crop')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
              />
            ))}
            {/* Duplicate for infinite scroll feel */}
             {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={`dup-${i}`} 
                className="w-64 h-40 bg-surface flex-shrink-0 grayscale hover:grayscale-0 transition-all cursor-pointer"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1574680077505-ef74a569575a?q=80&w=2070&auto=format&fit=crop')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
