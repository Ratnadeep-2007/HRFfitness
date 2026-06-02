# HRFitness Project Context

This file serves as the primary instructional context for Gemini CLI when working on the HRFitness codebase.

## Project Overview

HRFitness (HRF) is a Pune-based fitness center specializing in Strength Training, CrossFit, Yoga, Sports-Specific Training, Ladies Batches, and Rehab Support. This project is a high-performance, visually impactful single-page website designed for information delivery and lead generation.

### Core Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Animations:** Framer Motion (or CSS transitions) + Intersection Observer
- **Theming:** `next-themes` (Dark-dominant)

### Brand Identity
- **Primary Color:** HRF Flame (`#E8420A`)
- **Backgrounds:** Pitch Black (`#0A0A0A`), Charcoal (`#141414`)
- **Typography:**
  - Display: **Barlow Condensed**
  - Body/UI: **Plus Jakarta Sans**
  - Mono/Labels: **Space Mono**

Refer to `HRFitness_PRD.md` for the exhaustive brand guidelines and section specifications.

## Building and Running

| Task | Command |
|---|---|
| Development | `npm run dev` |
| Production Build | `npm run build` |
| Start Production | `npm run start` |
| Linting | `npm run lint` |

## Directory Structure

- `src/app/`: Next.js App Router pages and global layouts.
- `src/components/`: Reusable UI components.
  - `sections/`: Main building blocks of the single-page layout (Hero, About, Trainers, etc.).
- `src/lib/`: Utility functions (e.g., `cn` for Tailwind class merging).
- `public/`: Static assets (images, icons, etc.).
  - `trainers/`: Profile images for the coaching team.

## Development Conventions

- **Surgical Edits:** Favor targeted replacements over rewriting entire files.
- **Component Patterns:** Use `"use client"` where interactivity is required (e.g., in section components using intersection observers).
- **Styling:** Adhere strictly to the design tokens defined in `HRFitness_PRD.md`. Use the `cn` utility for conditional classes.
- **Responsiveness:** Always implement mobile-first designs.
- **Accessibility:** Ensure semantic HTML and proper contrast ratios (especially with the `#E8420A` accent).
- **Images:** Use the `img` tag with `object-cover` and appropriate `object-position` to ensure faces are centered in trainer profile cards.

## Active Goals
- Implementation of sections according to the PRD.
- Refining the visual language (gritty, high-contrast photography).
- Enhancing lead generation through the Contact and WhatsApp integration.
