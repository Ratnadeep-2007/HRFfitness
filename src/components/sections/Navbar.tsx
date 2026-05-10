"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Transformations", href: "#transformations" },
  { name: "Community", href: "#community" },
  { name: "Offers", href: "#offers" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-[999] transition-all duration-300 border-b",
        scrolled
          ? "bg-black/95 backdrop-blur-md border-border py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2 group">
          <div className="bg-accent w-10 h-10 flex items-center justify-center text-white font-display text-xl font-bold transition-transform group-hover:scale-105">
            HRF
          </div>
          <span className="font-display text-2xl font-bold tracking-tight hidden sm:inline-block">
            HR<span className="text-accent">FITNESS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] font-semibold uppercase tracking-widest text-body hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 hover:bg-surface transition-colors rounded-none text-body"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link 
            href="#contact" 
            className="hidden sm:flex bg-gradient-to-r from-accent to-[#8B0000] text-white px-6 py-2 text-[13px] font-bold uppercase tracking-widest hover:brightness-110 transition-all hover:scale-105 active:scale-95"
          >
            Join Now
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-text"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black z-[998] lg:hidden flex flex-col items-center justify-center gap-8 transition-all duration-500",
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 p-2 text-text"
        >
          <X size={32} />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-display uppercase tracking-widest text-text hover:text-accent transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="mt-4 bg-gradient-to-r from-accent to-[#8B0000] text-white px-10 py-4 text-lg font-bold uppercase tracking-widest hover:brightness-110 shadow-xl"
        >
          Book Trial
        </Link>
      </div>
    </nav>
  )
}
