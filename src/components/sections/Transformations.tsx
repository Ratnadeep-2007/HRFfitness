"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { cn } from "@/lib/utils"
import Link from "next/link"

const achievements = [
  { value: "28 kg", label: "Max Weight Lost" },
  { value: "12", label: "Athletes Trained" },
  { value: "40+", label: "Women in Ladies Batch" },
  { value: "100%", label: "Throwdown Attendance" },
]

const memberStories = [
  {
    name: "Aditya S.",
    duration: "4 Months",
    achievement: "Deadlifted 2x bodyweight",
    quote: "I walked in with zero gym experience. In 4 months, I deadlifted double my bodyweight. The coaching here is unlike anything I've seen.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Priya M.",
    duration: "6 Months",
    achievement: "Gained functional strength",
    quote: "I was intimidated at first. But the ladies batch felt like a safe space. Hrishi sir and the team made sure I never felt lost.",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Kunal P.",
    duration: "1 Year",
    achievement: "Lost 18kg & gained a tribe",
    quote: "The WODs are brutal in the best way. I lost 18kg and gained a whole community. Best decision I made this year.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop",
  },
]

export function Transformations() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="transformations" className="py-24 bg-black overflow-hidden w-full">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col gap-6">
            <span className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase">
              REAL PEOPLE. REAL RESULTS.
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl max-w-2xl">
              Every Transformation Starts with One Decision.
            </h2>
          </div>
          <Link
            href="#contact"
            className="text-accent font-bold uppercase tracking-widest text-[13px] border-b-2 border-accent pb-1 hover:text-white hover:border-white transition-colors"
          >
            View All Stories
          </Link>
        </div>

        {/* Stories Grid */}
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {memberStories.map((story, index) => (
            <div
              key={story.name}
              className={cn(
                "group relative aspect-[3/4] overflow-hidden bg-surface fade-in-up max-w-md mx-auto w-full md:max-w-none",
                inView && "visible"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${story.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/20 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-4">
                  <span className="bg-accent px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-white">
                    {story.duration}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">{story.name}</h3>
                <div className="text-accent font-mono text-xs uppercase tracking-widest mb-4">
                  {story.achievement}
                </div>
                <p className="text-white/80 text-sm italic leading-relaxed line-clamp-3">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12 border-y border-border py-12">
          {achievements.map((achievement) => (
            <div key={achievement.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-extrabold text-accent mb-2">
                {achievement.value}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 relative overflow-hidden bg-gradient-to-r from-accent to-[#8B0000] px-8 py-12 text-center group shadow-2xl">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-6">
              READY TO WRITE YOUR OWN STORY?
            </h3>
            <Link
              href="#contact"
              className="inline-block bg-white text-accent px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all hover:scale-105 active:scale-95"
            >
              Start Your Free Trial
            </Link>
          </div>
          {/* Decorative background element */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 select-none pointer-events-none group-hover:translate-x-5 transition-transform duration-1000 opacity-10 grayscale invert">
            <Image
              src="/hrf-logo1.png"
              alt="HRF Watermark"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
