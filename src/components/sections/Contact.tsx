"use client"

import { MessageCircle, MapPin, Phone, Mail, Camera, Play } from "lucide-react"
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
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Info & Map */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <span className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase">
                READY TO START?
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl">
                Join the <Logo /> Family.
              </h2>
              <p className="text-body text-lg leading-relaxed max-w-lg">
                Stop waiting for the perfect time. The perfect time is now. Reach out for a free trial or consultation.
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
                  <div className="text-body text-sm">+91 XXXXXXXXXX</div>
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
              <Link href="https://instagram.com/the_hrf" className="w-12 h-12 bg-surface flex items-center justify-center text-white hover:bg-accent transition-colors">
                <Camera size={20} />
              </Link>
              <Link href="#" className="w-12 h-12 bg-surface flex items-center justify-center text-white hover:bg-accent transition-colors">
                <MessageCircle size={20} />
              </Link>
              <Link href="#" className="w-12 h-12 bg-surface flex items-center justify-center text-white hover:bg-accent transition-colors">
                <Play size={20} />
              </Link>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video w-full bg-surface border border-border overflow-hidden group">
               <iframe 
                src="https://maps.google.com/maps?q=18.74982962620519,72.8874433611419&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(1.2)" }} 
                allowFullScreen={true} 
                loading="lazy"
                aria-hidden="false"
              ></iframe>
            </div>
          </div>

          {/* Right: Enquiry Form */}
          <div className="bg-surface p-8 md:p-12 border border-border relative">
            <div className="absolute top-0 right-0 w-16 h-16 bg-accent flex items-center justify-center text-white rotate-45 translate-x-8 -translate-y-8 select-none pointer-events-none">
              <span className="-rotate-45 font-display font-bold">JOIN</span>
            </div>
            
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="bg-surface border border-border px-4 py-3 text-sm focus:border-accent outline-none transition-colors text-text placeholder:text-muted"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+91 00000 00000"
                  className="bg-surface border border-border px-4 py-3 text-sm focus:border-accent outline-none transition-colors text-text placeholder:text-muted"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted">Program of Interest</label>
                <select className="bg-surface border border-border px-4 py-3 text-sm focus:border-accent outline-none transition-colors appearance-none cursor-pointer text-text">
                  <option>Strength Training</option>
                  <option>CrossFit</option>
                  <option>Sports-Specific Training</option>
                  <option>Ladies Batch</option>
                  <option>Rehab Support</option>
                  <option>Yoga</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted">Message (Optional)</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your fitness goals..."
                  className="bg-surface border border-border px-4 py-3 text-sm focus:border-accent outline-none transition-colors resize-none text-text placeholder:text-muted"
                />
              </div>
              
              <button
                type="submit"
                className="bg-gradient-to-r from-accent to-[#8B0000] text-white py-4 font-bold uppercase tracking-widest text-[13px] hover:brightness-110 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              >
                Send Message
              </button>

              <div className="relative flex items-center justify-center py-4">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border"></div></div>
                <span className="relative bg-surface px-4 text-[10px] font-mono uppercase text-muted">OR</span>
              </div>

              <Link 
                href="https://wa.me/91XXXXXXXXXX?text=Hi, I'd like to enquire about HRFitness"
                className="flex items-center justify-center gap-3 border-2 border-[#AA0000] text-[#AA0000] py-4 font-bold uppercase tracking-widest text-[13px] hover:bg-[#AA0000] hover:text-white transition-all"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </Link>
            </form>
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
