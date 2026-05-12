# HRFitness — Product Requirements Document

> **Version:** 1.0 · **Date:** May 2026 · **Status:** Draft  
> **Brand:** HRFitness (HRF) · **Founder:** Hrishikesh Raut · **Instagram:** [@the_hrf](https://instagram.com/the_hrf)

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Brand Identity & Color System](#2-brand-identity--color-system)
3. [Typography System](#3-typography-system)
4. [Information Architecture](#4-information-architecture)
5. [Section Specifications](#5-section-specifications)
6. [Visual Language](#6-visual-language)
7. [Technical Requirements](#7-technical-requirements)
8. [Photography Direction](#8-photography-direction)
9. [Copy Direction](#9-copy-direction)
10. [Build Milestones](#10-build-milestones)
11. [Open Items from Client](#11-open-items-from-client)

---

## 1. Project Overview

HRFitness is a Pune-based gym and coaching-driven fitness center offering multiple training formats. This PRD specifies the full requirements for its public-facing website — brand identity, visual system, page architecture, content strategy, and technical delivery.

| Attribute | Detail |
|---|---|
| **Project Type** | Informational + Lead-Gen Website |
| **Output Format** | Single HTML file or React SPA |
| **Theme** | Dark dominant · Light mode toggle |
| **Layout** | Mobile-first, fully responsive |
| **Audience** | Students, women, working professionals, amateur athletes, rehab patients |
| **Location** | Pune, Maharashtra, India |

### Core Business Values

> Transformation · Discipline · Expert Coaching · Inclusiveness · Women-Friendly Training · Athlete Development · Recovery & Rehab Support · Community

---

## 2. Brand Identity & Color System

### 2.1 Palette Rationale

The HRF palette is built around **Flame Orange-Red** as the primary accent on a deep charcoal/black foundation.

**Why Flame Orange-Red?**  
It occupies the psychological territory of courage, intensity, and transformation — directly aligned with HRF's CrossFit, Strength, and body-transformation identity. It's distinct from the clichéd blue of corporate wellness brands and avoids the saturated neon that cheapens many local gym brands. The warm flame also nods to the fire of effort — a natural metaphor for the brand's ethos.

---

### 2.2 Primary Palette

These are the only colors used globally across the site.

| Token | Name | Hex | Usage |
|---|---|---|---|
| `--accent` | **HRF Flame** | `#E8420A` | Primary CTAs, logo mark, metric highlights, active states |
| `--black` | **Pitch Black** | `#0A0A0A` | Page background (dark mode) |
| `--charcoal` | **Charcoal** | `#141414` | Alternate section backgrounds |
| `--surface` | **Surface** | `#1C1C1C` | Cards, nav, form inputs |
| `--border` | **Border** | `#2A2A2A` | Dividers, card outlines, table rules |
| `--muted` | **Muted** | `#555555` | Disabled states, placeholder text |
| `--body` | **Ash** | `#A8A8A8` | Body copy, secondary text |
| `--text` | **Warm White** | `#E8E4DC` | Primary readable text |
| `--white` | **Off-White** | `#F5F1E8` | Headings on dark, page background (light mode) |

> **Usage Rule:** Keep 90% of the design in black/charcoal/white. `#E8420A` is used sparingly — buttons, numbers, kicker labels, and logo only.

---

### 2.3 Secondary / Program Accents

Used **only within individual program cards** to differentiate categories. Never applied globally.

| Token | Name | Hex | Program |
|---|---|---|---|
| `--gold` | **Championship Gold** | `#C8A84B` | Sports-Specific Training · Achievement moments |
| `--teal` | **Rehab Teal** | `#1ABFA8` | Rehabilitation & Recovery |
| `--indigo` | **Yoga Indigo** | `#7B61FF` | Yoga |
| `--rose` | **Ladies Rose** | `#E83060` | Ladies Batches |

---

### 2.4 Light Mode Overrides

| Token (Dark) | Light Mode Value |
|---|---|
| `--black` → page bg | `#F5F1E8` |
| `--charcoal` → alt section | `#EEEBE3` |
| `--surface` → cards | `#E4E0D6` |
| `--border` | `#D0CCC2` |
| `--text` | `#141414` |
| `--body` | `#4A4A4A` |
| `--accent` | `#E8420A` *(unchanged)* |

---

### 2.5 Logo Specification

| Variant | Description |
|---|---|
| **Primary Mark** | Bold "HRF" in display font, inside a hard-edged square with flame-orange fill. No border radius — athletic, sharp. |
| **Wordmark** | "HR" in off-white · "Fitness" in flame orange · same display typeface |
| **Icon-only** | "HRF" block — used in favicon, sticky nav, app icon |
| **Light Mode** | Background swaps to `#F5F1E8`, text to `#0A0A0A`, accent stays `#E8420A` |
| **Minimum Size** | 28px height for wordmark · 20px for icon-only |

---

## 3. Typography System

### 3.1 Font Stack

| Role | Font Family | Source | Weights |
|---|---|---|---|
| **Display / Hero** | **Barlow Condensed** | Google Fonts | 700, 800 |
| **Body / UI** | **Plus Jakarta Sans** | Google Fonts | 300, 400, 500, 600, 700 |
| **Mono / Labels** | **Space Mono** | Google Fonts | 400, 700 |

### 3.2 Why These Fonts

**Barlow Condensed (Display)**  
A condensed sans-serif with a strong athletic character — used by sports brands, performance apparel, and fitness publications. Its tall, tight letterforms create maximum visual impact at large sizes without feeling like a generic gym brand. It replaces Bebas Neue specifically to avoid the overused CrossFit-poster look while maintaining the same muscular presence.

**Plus Jakarta Sans (Body)**  
A geometric humanist sans-serif with warm, approachable curves. Highly legible at small sizes. Carries the right mix of performance and community — it reads as modern and confident without being cold or corporate. Works exceptionally well for Indian audiences and reads cleanly on mobile screens.

**Space Mono (Labels / Kickers)**  
A fixed-width typeface with a utilitarian, industrial quality. Used for micro-labels, kicker text, stat metadata, and badge text — elements that need to feel data-driven and precise rather than decorative. Creates strong visual contrast against the display and body fonts.

### 3.3 Type Scale

| Level | Font | Size (desktop) | Size (mobile) | Weight | Case |
|---|---|---|---|---|---|
| Hero H1 | Barlow Condensed | 96px | 56px | 800 | UPPERCASE |
| Section H2 | Barlow Condensed | 48px | 36px | 700 | Title Case |
| Card H3 | Barlow Condensed | 24px | 22px | 700 | Title Case |
| Kicker | Space Mono | 11px | 10px | 400 | UPPERCASE |
| Body Large | Plus Jakarta Sans | 17px | 16px | 400 | Sentence |
| Body | Plus Jakarta Sans | 15px | 14px | 400 | Sentence |
| Caption / Meta | Space Mono | 11px | 10px | 400 | Lowercase |
| Button | Plus Jakarta Sans | 13px | 13px | 700 | UPPERCASE |

### 3.4 Google Fonts Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

---

## 4. Information Architecture

Single-page architecture with smooth scroll navigation. All sections map to nav anchors. No multi-page routing required for V1.

| # | Section | Nav Label | Primary Goal | Priority |
|---|---|---|---|---|
| 0 | Sticky Navbar | All | Navigation + CTA + theme toggle | P0 |
| 1 | Hero | Home | Brand statement, hook, dual CTAs | P0 |
| 2 | About HRFitness | About | Credibility, trust, what the gym is | P0 |
| 3 | Founder — Hrishikesh Raut | About | Coach trust, story, philosophy | P0 |
| 4 | Programs | Programs | 6 program cards, outcomes, enquiry | P0 |
| 5 | Transformations | Transformations | Social proof, stats, member stories | P0 |
| 6 | Community & Events | Community | Tribe culture, throwdowns, events | P1 |
| 7 | Testimonials | Community | Member stories, diverse personas | P0 |
| 8 | Offers / Promotions | Offers | Seasonal CTAs, urgency, lead gen | P1 |
| 9 | FAQ | Programs | Reduce friction for beginners/rehab | P1 |
| 10 | Contact / Join | Contact | Enquiry form, WhatsApp, map, socials | P0 |
| 11 | Footer | — | Links, legal, social | P1 |

---

## 5. Section Specifications

---

### 5.1 Sticky Navigation Bar

| Element | Specification |
|---|---|
| **Position** | `position: sticky; top: 0; z-index: 999` |
| **Background** | `rgba(10,10,10,0.95)` with `backdrop-filter: blur(12px)` |
| **Logo** | HRF SVG icon + wordmark, left-aligned |
| **Nav Links** | Home · About · Programs · Transformations · Community · Offers · Contact |
| **Link Style** | Plus Jakarta Sans 13px 600 weight · uppercase · letter-spacing 0.1em |
| **Active State** | Flame orange underline (`2px solid #E8420A`) |
| **CTA Button** | "Book Trial" — filled flame orange, 32px height, sharp edges (0 border-radius) |
| **Theme Toggle** | Sun/Moon icon, right side, 300ms smooth transition |
| **Mobile** | Hamburger → full-screen overlay, nav links stacked vertically |

---

### 5.2 Hero Section

| Element | Specification |
|---|---|
| **Layout** | Full viewport height (`100svh`). Dark overlay (70%) over action image or CSS collage grid |
| **Kicker** | Space Mono · 11px · `#E8420A` · UPPERCASE · letter-spacing 0.2em — "STRENGTH · CROSSFIT · YOGA · SPORTS · REHAB" |
| **H1 Headline** | Barlow Condensed 800 · 96px / 56px mobile — "WHERE DISCIPLINE / BECOMES TRANSFORMATION" |
| **Sub-line** | Plus Jakarta Sans 17px · Ash color — "Expert coaching. Real results. A community that pushes you further than you thought you could go." |
| **Primary CTA** | "Start Your Fitness Journey" — `#E8420A` filled, 0 border-radius, 48px height |
| **Secondary CTA** | "Book a Trial Session" — outlined, `#E8420A` border, same height |
| **Scroll Indicator** | Animated chevron-down, bottom center, fades on scroll |

**Tagline Options (choose one):**

- *"Where Discipline Becomes Transformation"*
- *"Train With Purpose. Transform With Community."*
- *"Build Strength. Move Better. Transform Fully."*

---

### 5.3 About HRFitness

| Element | Specification |
|---|---|
| **Layout** | Two-column: left = copy + stat strip · right = large photo or textured block |
| **Kicker** | "MORE THAN A GYM" |
| **Headline** | "Built for Every Body. Coached for Every Goal." |
| **Body Copy** | "HRFitness isn't just a place to work out. It's a performance environment where every session is coached, every member has a plan, and no one trains alone. Whether you're picking up a barbell for the first time or training for competition — this is where you belong." |
| **Stat Strip** | 4 animated counters on scroll entry: **6+** Programs · **500+** Members Transformed · **5+** Years Coaching · **100%** Expert-Led |
| **Visual Detail** | Thin flame-orange vertical rule separating columns on desktop |

---

### 5.4 Founder — Hrishikesh Raut

| Element | Specification |
|---|---|
| **Layout** | Asymmetric full-width: founder photo left (large, high-contrast or B&W) · text block right |
| **Kicker** | "THE COACH BEHIND HRF" |
| **Name** | "Hrishikesh Raut" — Barlow Condensed 64px |
| **Sub-label** | "Founder & Head Coach, HRFitness" — Space Mono, muted |
| **Story Copy** | "Hrishikesh started HRFitness with one belief: that every person — regardless of age, gender, or fitness level — deserves expert coaching and a community that holds them accountable. What began as a passion for strength and functional training grew into Pune's most versatile fitness center, covering everything from CrossFit to Yoga, sports conditioning to rehabilitation. Hrishikesh's coaching philosophy is simple: understand the person before you design the program." |
| **Philosophy Quote** | Pull-quote in Barlow Condensed 32px · flame orange — *"A good coach doesn't just build strength. They build belief."* |
| **Credentials Strip** | Icon badges for certifications — update with Hrishikesh's real titles before launch |

---

### 5.5 Programs Section

Six cards in a 3-col grid (desktop) · 2-col (tablet) · 1-col (mobile). Each card: top-accent bar · icon · name · tagline · 3 outcomes · enquiry CTA.

| Program | Top Accent | Tagline | Key Outcomes |
|---|---|---|---|
| **Strength Training** | `#E8420A` Flame | "Get stronger, move better, look the part." | Progressive barbell programming · Functional muscle · Personalized load plans |
| **CrossFit** | `#E8420A` Flame | "High intensity. High results. Every time." | WOD-based group sessions · Cardio + strength combo · Measurable performance gains |
| **Yoga** | `#7B61FF` Indigo | "Flexibility, breath, and mental stillness." | Morning & evening batches · Mobility for all levels · Stress & recovery focus |
| **Sports-Specific Training** | `#C8A84B` Gold | "Train like the athlete you want to become." | Multi-sport conditioning · Speed, agility & power · Competition prep |
| **Ladies Batches** | `#E83060` Rose | "Your space. Your pace. Your results." | Women-only batches · Safe & supportive · Strength, toning & wellness |
| **Rehab Support** | `#1ABFA8` Teal | "Come back stronger than before your injury." | Post-injury return protocols · Movement correction · Trainer-guided recovery |

---

### 5.6 Transformations Section

| Element | Specification |
|---|---|
| **Layout** | Dark section with grain texture overlay. Horizontal scroll on mobile, 3-col grid on desktop |
| **Kicker** | "REAL PEOPLE. REAL RESULTS." |
| **Headline** | "Every Transformation Starts with One Decision." |
| **Member Cards** | Member name · Duration · Program · Achievement quote · Photo or placeholder |
| **Achievement Strip** | Animated on scroll: "28 kg Lost" · "12 Athletes Trained for Competition" · "40+ Women Completed Their First Batch" · "100% Throwdown Attendance" |
| **CTA Banner** | Full-width flame background: "Ready to write your story? → Start Free Trial" |

---

### 5.7 Community & Events

| Element | Specification |
|---|---|
| **Kicker** | "MORE THAN TRAINING" |
| **Headline** | "HRF is a Tribe." |
| **Body** | "We don't just train together — we compete, celebrate, and grow together. From our signature Throwdown challenges to beach workouts and community opens, HRF is where fitness becomes a lifestyle." |
| **Event Cards** | 4 cards with photo overlay + title + description (see below) |
| **Photo Strip** | Horizontal auto-scroll reel of community moments (CSS animation) |

**Event Card Copy:**

- **HRF Throwdown** — "Our in-house CrossFit-style competition. Test your fitness. Meet your limits."
- **Young Guns** — "Youth athlete training and competitive exposure for the next generation."
- **Beach Day** — "Outdoor WODs, sand, sun, and community. Fitness without walls."
- **Opening Day / Anniversary** — "Annual celebration of the HRF family. A tradition of showing up."

---

### 5.8 Testimonials

Six testimonials across diverse member personas. Horizontal slider on mobile, 3-col on desktop.

| Name | Persona | Program | Quote |
|---|---|---|---|
| **Aditya S.** | Engineering Student | Strength + CrossFit | "I walked in with zero gym experience. In 4 months, I deadlifted double my bodyweight. The coaching here is unlike anything I've seen." |
| **Priya M.** | Working Professional | Ladies Batch + Yoga | "I was intimidated at first. But the ladies batch felt like a safe space. Hrishikesh sir and the team made sure I never felt lost." |
| **Rajan K.** | Amateur Cricketer | Sports-Specific | "My game literally changed after 3 months of sports training at HRF. My speed, agility — all measurably better." |
| **Sunita D.** | Homemaker, 42 | Yoga + Rehab | "I had chronic back pain for years. The rehab program here didn't just manage it — it fixed it. I train 4 days a week now." |
| **Kunal P.** | IT Professional | CrossFit | "The WODs are brutal in the best way. I lost 18kg and gained a whole community. Best decision I made this year." |
| **Neha T.** | College Athlete | Young Guns | "I've trained at bigger gyms in Pune. Nothing compares to the attention to detail you get at HRF." |

---

### 5.9 Offers & Promotions

Show 1–2 active offers at a time. Cards use flame-orange gradient banner with bold CTA.

| Campaign | Timing | Headline | CTA |
|---|---|---|---|
| **New Year Offer** | Jan 1–15 | "New Year. New Body. New You." — 20% off all enrollments | "Claim Your Spot" |
| **Diwali Offer** | Diwali week | "Celebrate the Light. Transform the Body." — Special batch packages | "Get the Diwali Deal" |
| **Launch Offer** | Ongoing | "Be Among the First 50." — Founding member rates | "Join Now" |
| **Trial Session** | Always-on | "Try Before You Commit." — Free first session | "Book Your Free Trial" |

---

### 5.10 FAQ Accordion

| Category | Question | Answer Direction |
|---|---|---|
| **Batches** | What batch timings are available? | Morning, evening, and weekend batches. Contact via WhatsApp for current schedule. |
| **Beginners** | I've never trained before. Can I join? | All programs have beginner onboarding. First session includes a movement assessment. |
| **Beginners** | Do you offer personal training? | Yes. One-on-one sessions available by appointment. |
| **Ladies** | Is the ladies batch women-only? | Yes. Dedicated women-only environment, led by trained coaches. |
| **Rehab** | I have a knee/back injury. Can I train? | Yes. The rehab program is designed for injury recovery. We coordinate with your physio if needed. |
| **Pricing** | How much does membership cost? | Pricing varies by program and duration. Contact for a free consultation. |
| **CrossFit** | Do I need prior experience for CrossFit? | No. Sessions are scaled to your level. Foundations onboarding for all new CrossFitters. |

---

### 5.11 Contact / Join Section

| Element | Specification |
|---|---|
| **Kicker** | "READY TO START?" |
| **Headline** | "Join the HRF Family." |
| **Form Fields** | Name · Phone Number · Email (optional) · Program of Interest (dropdown) · Message (optional) |
| **Form CTA** | "Send Enquiry" — flame orange, full width on mobile |
| **WhatsApp CTA** | "Chat with Us on WhatsApp" — large button with WhatsApp icon, links to `wa.me/91XXXXXXXXXX` |
| **Map** | Static map image or embedded Google Maps iframe — gym location in Pune |
| **Social Links** | Instagram (@the_hrf) · WhatsApp · YouTube (if applicable) — icon-only, flame orange on hover |
| **Address Block** | Gym address, phone, email — Space Mono typography |

---

## 6. Visual Language

### 6.1 Section Transitions

Alternate between `#0A0A0A` and `#141414` backgrounds for visual rhythm. Use a 3px flame-orange horizontal rule (`border-top: 3px solid #E8420A`) to mark key section entrances.

### 6.2 Cards

- Background: `#1C1C1C`
- Border: `1px solid #2A2A2A`
- Top accent bar: 3px in program color
- Border radius: `0` — hard athletic edges
- Hover: `box-shadow: 0 8px 32px rgba(232,66,10,0.12)` only on interaction

### 6.3 Image Treatment

All photos use a dark gradient overlay:

```css
background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%);
```

Photos should be high-contrast, dramatic lighting, real training moments — never studio-white backgrounds.

### 6.4 Metric Numbers

```
Font: Barlow Condensed 800
Size: 64–80px
Color: #E8420A
Animation: Counter from 0 → value on scroll entry (IntersectionObserver)
Unit label: Plus Jakarta Sans 400 18px, #A8A8A8
```

### 6.5 Buttons

| Type | Style |
|---|---|
| **Primary** | `background: #E8420A` · `color: #F5F1E8` · `border-radius: 0` · Plus Jakarta Sans 700 13px UPPERCASE · hover: `background: #C83508` scale(1.02) |
| **Secondary** | Outlined · `border: 2px solid #E8420A` · `color: #E8420A` · transparent background · same font |
| **Ghost** | `border: 1px solid #2A2A2A` · `color: #A8A8A8` · for non-priority actions |

### 6.6 Motion / Animation

- Fade + slide-up on scroll (IntersectionObserver) — `transform: translateY(24px)` → `translateY(0)`, `opacity: 0` → `1`
- Stagger delay on card grids: `animation-delay: calc(index * 80ms)`
- Stat counter animation on section entry
- No autoplay video in V1
- CSS-only where possible
- Always respect `prefers-reduced-motion: reduce`

### 6.7 Micro-Labels (Kickers)

```
Font: Space Mono 400
Size: 10–11px
Letter-spacing: 0.18em
Transform: uppercase
Color: #E8420A for accent · #A8A8A8 for neutral
```

---

## 7. Technical Requirements

| Requirement | Specification | Priority |
|---|---|---|
| **Output Format** | Single HTML file (inline CSS/JS) or React SPA | P0 |
| **Responsive Breakpoints** | Mobile `<640px` · Tablet `640–1024px` · Desktop `>1024px` | P0 |
| **CSS Approach** | Mobile-first. CSS custom properties for all tokens. | P0 |
| **Smooth Scroll** | `html { scroll-behavior: smooth }` + JS polyfill for Safari | P0 |
| **Theme Toggle** | `data-theme` attribute on `<html>`. Persist in `localStorage`. 300ms CSS transition. | P1 |
| **Scroll Animations** | IntersectionObserver API. Stat counters on entry. Staggered card reveals. | P1 |
| **Form** | Client-side validation. Success state. Connect to Formspree or Netlify Forms for V1. | P0 |
| **WhatsApp Link** | `href="https://wa.me/91XXXXXXXXXX?text=Hi, I'd like to enquire about HRFitness"` | P0 |
| **Images** | `loading="lazy"` on all below-fold images. WebP format preferred. | P1 |
| **Performance Target** | Lighthouse score > 85 (Performance, Accessibility, SEO) | P1 |
| **Accessibility** | WCAG AA contrast ratios · semantic HTML · alt text · keyboard focus states | P1 |
| **Fonts** | Google Fonts preconnect in `<head>`. All 3 families loaded with `display=swap`. | P0 |
| **SEO Meta** | Title: "HRFitness — Strength, CrossFit & Yoga Gym in Pune · Hrishikesh Raut" · Meta description · Open Graph | P1 |
| **Favicon** | HRF icon mark, 32×32 SVG + ICO | P1 |

---

## 8. Photography Direction

All photography should feel real, gritty, and human — not stock-photo perfect. Dramatic lighting, chalk dust, sweat, real expressions.

| Section | Direction | Unsplash Search Terms |
|---|---|---|
| **Hero** | Athlete mid-rep (deadlift, clean, box jump) · dark dramatic lighting · or 2×2 collage: barbell / yoga / crossfit / community | `"athlete barbell dark"` · `"crossfit dramatic"` |
| **About** | Gym interior · equipment racks · chalk hands · community warmup | `"gym interior dark"` · `"barbell chalk hands"` |
| **Founder** | Coach demonstrating movement or observing athlete · B&W or high contrast edit | `"personal trainer coaching"` · `"gym coach athlete"` |
| **Strength** | Back squat, deadlift, bench press · dramatic side lighting | `"powerlifting dark"` · `"back squat gym"` |
| **CrossFit** | Wall ball, rope climb, WOD group session | `"crossfit wod group"` · `"rope climb athlete"` |
| **Yoga** | Morning class · soft warm light · calm expressions | `"yoga class sunrise"` · `"yoga studio morning"` |
| **Sports** | Agility ladder, sprint, athlete in sport action | `"sports conditioning agility"` · `"athlete sprint training"` |
| **Ladies Batch** | Women's group training · supportive energy · not glamorized | `"women strength training gym"` · `"women fitness group"` |
| **Rehab** | Careful assisted movement · bands · trainer guidance | `"physical therapy gym"` · `"rehab exercise trainer"` |
| **Community** | Group celebration · outdoor workout · throwdown finish line · team photo | `"crossfit competition community"` · `"outdoor group workout"` |
| **Transformations** | Confident post-transformation posture · person looking strong, not just thin | `"fitness transformation confident"` · `"athlete body strong"` |

---

## 9. Copy Direction

### 9.1 Brand Voice Rules

Write like a confident coach talking to someone who's serious about changing. No "amazing journeys." No "transform your life in 30 days." No excessive exclamation marks. Real, grounded, action-oriented. Local pride without being provincial.

**✓ Write like this:**

- "Your body is capable of more than you think. Our job is to show you how."
- "No shortcuts. No gimmicks. Just coaching that works."
- "Show up. Put in the work. The results follow."

**✗ Avoid this:**

- "Start your amazing transformation journey today!"
- "Unlock your true potential and maximize your gains!!!"
- "Join our family and change your life forever!"

### 9.2 Copy Rules by Element

| Element | Rule |
|---|---|
| **Section Kickers** | Space Mono · UPPERCASE · under 4 words · Examples: "TRAIN WITH PURPOSE" · "MORE THAN A GYM" |
| **Headlines** | Barlow Condensed · punchy and direct · lead with action or outcome · no questions |
| **Body Copy** | Short paragraphs (2–3 sentences max) · no jargon · no gym clichés |
| **CTA Text** | Maximum 5 words · direct · no "Click here to…" |
| **Button Examples** | "Book a Trial Session" · "Join the HRF Family" · "Start Your Journey" · "Enquire About Programs" · "Chat With Us" |

---

## 10. Build Milestones

| Phase | Scope | Deliverable |
|---|---|---|
| **Phase 1** — Foundation | Color tokens · typography · component library (buttons, cards, labels) · sticky nav · hero | Static HTML shell with full design system |
| **Phase 2** — Core Sections | About · Founder · 6 Program cards · Transformations. Fully responsive. Placeholder images. | Responsive page with all P0 sections |
| **Phase 3** — Community & Lead Gen | Community/Events · Testimonials · Offers · FAQ accordion · Contact form · WhatsApp CTA | Full page, all sections complete |
| **Phase 4** — Polish | Dark/Light toggle · scroll animations · stat counters · mobile nav · accessibility pass · SEO meta | Production-ready build |
| **Phase 5** — Content Swap | Replace placeholder images · update credentials · gym address · WhatsApp number · go live | Live website |

---

## 11. Open Items from Client

The following must be provided before Phase 5 (content swap) can be completed.

| # | Item | Owner | Status |
|---|---|---|---|
| 1 | Real gym photos (interior, training, events) | Hrishikesh Raut / PR Team | ⬜ Pending |
| 2 | Founder photo — high-res, coaching context | Hrishikesh Raut | ⬜ Pending |
| 3 | Exact gym address + Google Maps link | Client | ⬜ Pending |
| 4 | WhatsApp contact number | Client | ⬜ Pending |
| 5 | Hrishikesh Raut's certifications (exact titles) | Hrishikesh Raut | ⬜ Pending |
| 6 | Batch timings and pricing (even a range) | Client | ⬜ Pending |
| 7 | Real member testimonials with approval to publish | HRF Team | ⬜ Pending |
| 8 | Social media handles | Client | ✅ @the_hrf confirmed |
| 9 | Active promotion details for launch | Client | ⬜ Pending |
| 10 | Domain name for hosting | Client | ⬜ Pending |

---

*HRFitness PRD v1.0 · Confidential · May 2026*  
*@the_hrf · Founder: Hrishikesh Raut · Pune, Maharashtra*
