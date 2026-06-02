import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="relative h-svh w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 hover:scale-110"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-accent/30 backdrop-brightness-50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="flex flex-col items-center gap-6 max-w-5xl mx-auto">
          {/* Kicker */}
          <span className="font-mono text-[10px] md:text-[11px] text-accent tracking-[0.2em] uppercase">
            STRENGTH · CROSSFIT · SPORTS · REHAB · YOGA
          </span>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-display font-extrabold leading-[0.9] text-text tracking-tighter">
            WHERE DISCIPLINE <br /> BECOMES <span className="text-accent">TRANSFORMATION</span>
          </h1>

          {/* Sub-line */}
          <p className="text-body text-base md:text-xl max-w-2xl mx-auto mt-4 font-sans leading-relaxed">
            Expert coaching. Real results. A community that pushes you further than you thought you could go.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <Link
              href="#contact"
              className="bg-gradient-to-r from-accent to-[#8B0000] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-widest hover:brightness-110 transition-all hover:scale-105 active:scale-95 text-center shadow-lg"
            >
              Start Your Fitness Journey
            </Link>
            <Link
              href="#contact"
              className="border-2 border-accent text-accent px-8 py-4 text-[13px] font-bold uppercase tracking-widest hover:bg-accent hover:text-white dark:hover:text-black transition-all hover:scale-105 active:scale-95 text-center"
            >
              Book a Trial Session
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted hover:text-accent transition-colors">
        <ChevronDown size={32} />
      </div>
    </section>
  )
}
