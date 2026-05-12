"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

export function Founder() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center fade-in-up",
            inView && "visible"
          )}
        >
          {/* Left Column: Photo */}
          <div className="relative aspect-[4/5] lg:h-[700px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
              style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col gap-6">
            <span className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase">
              THE COACH BEHIND HRF
            </span>
            <h2 className="text-6xl md:text-8xl font-display font-extrabold leading-tight">
              Hrishikesh Raut
            </h2>
            <div className="font-mono text-sm text-muted uppercase tracking-widest">
              Founder & Head Coach, HRFitness
            </div>
            
            <p className="text-body text-lg leading-relaxed mt-4">
              Hrishikesh started HRFitness with one belief: that every person — regardless of age, gender, or fitness level — deserves expert coaching and a community that holds them accountable. What began as a passion for strength and functional training grew into Pune&apos;s most versatile fitness center.
            </p>
            
            <p className="text-body text-lg leading-relaxed">
              Hrishikesh&apos;s coaching philosophy is simple: understand the person before you design the program. From CrossFit to Yoga, sports conditioning to rehabilitation, he ensures every member moves with purpose and intent.
            </p>

            <blockquote className="mt-8 relative py-8 px-10 border-l-4 border-accent bg-surface/30">
              <p className="text-2xl md:text-3xl font-display text-accent italic leading-tight">
                &ldquo;A good coach doesn&apos;t just build strength. They build belief.&rdquo;
              </p>
            </blockquote>

            {/* Credentials Placeholder */}
            <div className="flex flex-wrap gap-4 mt-8">
              {["CrossFit L1", "ASCA Level 1", "Nutrition Expert", "Rehab Specialist"].map((cert) => (
                <div 
                  key={cert}
                  className="px-4 py-2 bg-surface border border-border text-[10px] font-mono uppercase tracking-widest text-muted"
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
