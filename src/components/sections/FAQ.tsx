"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What batch timings are available?",
    answer: "We offer morning, evening, and weekend batches to suit all schedules. Our early morning sessions start at 6:00 AM, and late evening batches go up to 9:00 PM. Contact us via WhatsApp for the most updated schedule.",
  },
  {
    question: "I've never trained before. Can I join?",
    answer: "Absolutely! All our programs have beginner onboarding. Your first session includes a movement assessment where our coaches understand your current fitness level and design a scaled approach for you.",
  },
  {
    question: "Is the ladies batch women-only?",
    answer: "Yes. Our dedicated ladies batches provide a safe, supportive, and women-only environment led by trained coaches who understand specific female fitness needs.",
  },
  {
    question: "I have a knee/back injury. Can I train?",
    answer: "Yes. Our rehab program is specifically designed for injury recovery. We work on movement correction and strengthening. If you're seeing a physiotherapist, we can coordinate with them to ensure your training supports your recovery.",
  },
  {
    question: "How much does membership cost?",
    answer: "Pricing varies based on the program (CrossFit, Strength, Rehab, and Yoga) and the duration of your commitment. We offer monthly, quarterly, and annual packages. Contact us for a free consultation and quote.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <span className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase">
            COMMON QUESTIONS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl">
            Everything You Need to Know
          </h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-surface border border-border overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-bold font-sans">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-accent" />
                ) : (
                  <ChevronDown className="text-muted" />
                )}
              </button>
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="p-6 pt-0 text-body leading-relaxed border-t border-border/50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
