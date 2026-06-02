"use client"

import { MessageCircle, MapPin, Phone, Mail, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const Logo = () => (
  <Image
    src="/hrf-logo1.png"
    alt="HRF"
    width={48}
    height={20}
    className="inline-block object-contain align-baseline mx-1 h-[0.8em] w-auto"
  />
)

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-black overflow-hidden w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Left: Contact Info */}
          <div className="flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-6">
              <span className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase">
                READY TO START?
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl leading-[1.1]">
                Join the <Logo /> Family.
              </h2>
              <p className="text-body text-lg leading-relaxed max-w-lg">
                Stop waiting for the perfect time. The perfect time is now. Reach out to get details on the training batches, pricing, or book a trial session.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <div className="font-bold uppercase tracking-widest text-[13px] mb-1">Location</div>
                  <div className="text-body text-sm">Shop No. 5, Near Mitcon, Balewadi High Street Road, Balewadi, Pune, Maharashtra 411045</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <div className="font-bold uppercase tracking-widest text-[13px] mb-1">Phone</div>
                  <div className="text-body text-sm">+91 70586 35574</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <div className="font-bold uppercase tracking-widest text-[13px] mb-1">Email</div>
                  <div className="text-body text-sm">hello@hrfitness.in</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Link 
                href="https://www.instagram.com/the_hrf?igsh=N3RpMGs0aDNxMmQx" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-12 h-12 bg-surface hover:bg-accent text-white flex items-center justify-center rounded-full transition-colors duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </Link>
              <Link 
                href="https://wa.me/917058635574?text=Hi%20HRFitness!%20I'm%20interested%20in%20training%20at%20your%20gym.%20I'd%20love%20to%20get%20details%20on%20the%20training%20batches%2C%20pricing%2C%20and%20book%20a%20trial%20session." 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-12 h-12 bg-surface hover:bg-[#25D366] text-white flex items-center justify-center rounded-full transition-colors duration-300"
              >
                <MessageCircle size={20} />
              </Link>
              <Link 
                href="#" 
                aria-label="YouTube"
                className="w-12 h-12 bg-surface hover:bg-accent text-white flex items-center justify-center rounded-full transition-colors duration-300"
              >
                <Play size={20} />
              </Link>
            </div>
          </div>

          {/* Right: Map (Full Height/White Theme) */}
          <div className="aspect-[4/3] lg:aspect-auto w-full min-h-[400px] bg-surface border border-border overflow-hidden group">
             <iframe 
              src="https://maps.google.com/maps?q=18.74982962620519,72.8874433611419&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              aria-hidden="false"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-border">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="h-8">
          <Image
            src="/hrf-logo1.png"
            alt="HRF Logo"
            width={80}
            height={32}
            className="h-full w-auto object-contain"
          />
        </div>
        
        <div className="text-[11px] font-mono text-muted uppercase tracking-widest">
          &copy; {new Date().getFullYear()} HRFITNESS GYM PUNE. ALL RIGHTS RESERVED.
        </div>
        
        <div className="flex gap-6 text-[11px] font-mono text-muted uppercase tracking-widest">
          <Link href="#" className="hover:text-accent">Privacy Policy</Link>
          <Link href="#" className="hover:text-accent">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
