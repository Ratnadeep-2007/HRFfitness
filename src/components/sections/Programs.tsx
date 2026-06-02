"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Dumbbell, Zap, Wind, Trophy, Users, HeartPulse, ArrowRight } from "lucide-react"
import Link from "next/link"
import { ElectricBorder } from "@/components/ElectricBorder"

const programs = [
  {
    name: "Strength Training",
    accent: "bg-gradient-to-r from-accent to-[#8B0000]",
    icon: Dumbbell,
    tagline: "Get stronger, move better, look the part.",
    outcomes: ["Progressive barbell programming", "Functional muscle", "Personalized load plans"],
  },
  {
    name: "CrossFit",
    accent: "bg-gradient-to-r from-accent to-[#8B0000]",
    icon: Zap,
    tagline: "High intensity. High results. Every time.",
    outcomes: ["WOD-based group sessions", "Cardio + strength combo", "Measurable performance gains"],
  },
  {
    name: "Sports-Specific Training",
    accent: "bg-gold", // Maps to #FF4D4D in globals.css
    icon: Trophy,
    tagline: "Train like the athlete you want to become.",
    outcomes: ["Multi-sport conditioning", "Speed, agility & power", "Competition prep"],
  },
  {
    name: "Ladies Batches",
    accent: "bg-rose", // Maps to #FF3333 in globals.css
    icon: Users,
    tagline: "Your space. Your pace. Your results.",
    outcomes: ["Women-only batches", "Safe & supportive", "Strength, toning & wellness"],
  },
  {
    name: "Rehab Support",
    accent: "bg-teal", // Maps to #CC0000 in globals.css
    icon: HeartPulse,
    tagline: "Come back stronger than before your injury.",
    outcomes: ["Post-injury return protocols", "Movement correction", "Trainer-guided recovery"],
  },
  {
    name: "Yoga",
    accent: "bg-indigo", // Maps to #990000 in globals.css
    icon: Wind,
    tagline: "Flexibility, breath, and mental stillness.",
    outcomes: ["Morning & evening batches", "Mobility for all levels", "Stress & recovery focus"],
  },
]

export function Programs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="programs" className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <span className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase">
            CHOOSE YOUR DISCIPLINE
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl max-w-3xl">
            Coaching-Led Programs for Every Goal
          </h2>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((program, index) => (
            <ElectricBorder
              key={program.name}
              color="#E8420A"
              speed={0.8}
              chaos={0.1}
              borderRadius={0}
              className={cn(
                "fade-in-up max-w-md mx-auto w-full md:max-w-none",
                inView && "visible"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="group relative bg-surface border border-border p-8 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(255,0,0,0.12)] h-full w-full">
                {/* Top Accent Bar */}
                <div className={cn("absolute top-0 left-0 w-full h-[3px]", program.accent)} />
                
                {/* Icon */}
                <div className="mb-6 text-accent group-hover:scale-110 transition-transform">
                  <program.icon size={40} strokeWidth={1.5} />
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl font-display font-bold mb-3">{program.name}</h3>
                <p className="text-muted text-sm mb-8 leading-relaxed">
                  {program.tagline}
                </p>

                {/* Outcomes */}
                <ul className="space-y-3 mb-10">
                  {program.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3 text-[13px] text-body">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="#contact"
                  className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-accent group-hover:translate-x-2 transition-transform"
                >
                  Enquire Now <ArrowRight size={14} />
                </Link>
              </div>
            </ElectricBorder>
          ))}
        </div>
      </div>
    </section>
  )
}
