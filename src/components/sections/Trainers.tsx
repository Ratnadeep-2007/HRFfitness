"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Camera, MessageCircle, User } from "lucide-react"

const trainers = [
  {
    name: "Arjun Sir",
    role: "Head Coach & Founder",
    specialty: "Strength & Conditioning",
    bio: "10+ years of experience in transformative strength training and athletic performance.",
    image: "/trainers/arjun.jpg",
    position: "center 20%",
  },
  {
    name: "Shreyas Sir",
    role: "Lead CrossFit Coach",
    specialty: "High-Intensity Training",
    bio: "Former competitive athlete specializing in functional fitness and metabolic conditioning.",
    image: "/trainers/shreyas.jpeg",
    position: "center 15%",
  },
  {
    name: "Nitesh Sir",
    role: "Senior Trainer",
    specialty: "Bodybuilding & Hypertrophy",
    bio: "Expert in muscle physiology and precision hypertrophy programming for all levels.",
    image: "/trainers/nitesh.jpeg",
    position: "center 10%",
  },
]

export function Trainers() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="trainers" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <span className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase">
            MEET THE EXPERTS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl max-w-3xl">
            World-Class Coaches Dedicated to Your Success
          </h2>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {trainers.map((trainer, index) => (
            <div
              key={trainer.name}
              className={cn(
                "group relative bg-charcoal border border-border overflow-hidden transition-all duration-500 hover:shadow-[0_8px_32px_rgba(255,0,0,0.12)] fade-in-up max-w-md mx-auto w-full md:max-w-none",
                inView && "visible"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Trainer Image Placeholder */}
              <div className="aspect-[4/5] bg-surface relative overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  style={{ objectPosition: trainer.position }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-4">
                    <Camera size={20} className="text-white hover:text-accent cursor-pointer transition-colors" />
                    <MessageCircle size={20} className="text-white hover:text-accent cursor-pointer transition-colors" />
                    <User size={20} className="text-white hover:text-accent cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>

              {/* Trainer Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-display font-bold mb-1">{trainer.name}</h3>
                  <p className="text-accent text-[11px] font-bold uppercase tracking-wider">{trainer.role}</p>
                </div>
                
                <p className="text-body text-xs leading-relaxed mb-4">
                  {trainer.bio}
                </p>

                <div className="pt-4 border-t border-border">
                  <span className="text-[10px] text-muted uppercase tracking-widest block mb-1">Expertise</span>
                  <p className="text-white text-sm font-semibold">{trainer.specialty}</p>
                </div>
              </div>

              {/* Top Accent Bar (Visible on Hover) */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-accent to-[#8B0000] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
