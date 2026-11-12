# Marvis Multiline Ltd — Cinematic Automotive & Bicycle Repair Platform

A production-grade, highly responsive commercial repair website for **Marvis Multiline Ltd**, engineered with Next.js 14, TypeScript, Tailwind CSS, and a scroll-driven canvas frame sequence pipeline.

## Approved Company Profile
- **Legal Entity:** Marvis Multiline Ltd
- **Contact Email:** cyclecarts@gmail.com
- **Direct Telephone:** 07442807141 (`tel:+447442807141`)
- **Official WhatsApp:** +447442807141 (`https://wa.me/447442807141`)
- **Brand Identity:** Original Navy-Blue & Gold Arc Marvis Multiline Corporate Logo

## Two Core Repair Divisions
1. **01 Car Repairing & Diagnostics** (`/car-repairing`) — OBD-II diagnostic scanning, brake disc and pad replacement, scheduled interim/full servicing, steering and suspension overhauls, and pre-MOT mechanical readiness checks.
2. **02 Cycle Repairing & Workshop Stand Servicing** (`/cycle-repairing`) — Professional bicycle stand servicing, derailleur indexing, hydraulic disc brake bleeding, drivetrain ultrasonic degreasing, and wheel truing for road, commuter, hybrid, and mountain bikes.

## Three-Video Cinematic Architecture (10 Seconds Each, Full HD 1920x1080)
1. **Video 01 (Top Hero):** Combined Workshop (`/media/hero/hero-workshop.mp4` + 50 Full HD JPG frames) — Wide shot of automotive lift work, engine bay diagnosis, and bicycle stand adjustment simultaneously. Full-bleed responsive cover with subtle gradient scrim.
2. **Video 02 (Zigzag 01):** Car Repairing Process (`/media/chapters/car-repairing/frames/`) — 50 frames scrubbed smoothly with scroll, desktop visual right, editorial copy left.
3. **Video 03 (Zigzag 02):** Cycle Repairing Process (`/media/chapters/cycle-repairing/frames/`) — 50 frames scrubbed smoothly with scroll, desktop visual left, editorial copy right.

## Technical Architecture
- **Framework:** Next.js 14 (App Router) + React 18 + TypeScript
- **Styling:** Tailwind CSS with official brand palette (Corporate Navy `#001F49`, Warm Royal Gold `#C59B4E`, Dark Surface `#040D1A`)
- **Cinematic Scrub Engine:** Scroll-controlled frame calculation via `requestAnimationFrame` and HTML5 `<canvas>` with zero visible debug HUD overlays. Supports desktop wheel and mobile touch gestures.
- **Service Bookings & Ledger:** Interactive booking forms on homepage and dedicated service pages, saving to `marvis_service_enquiries`.
- **Careers & Recruitment:** Dedicated `/careers` page with verified job descriptions and online applicant submission.
- **Legacy Redirects:** Permanent 308 redirects from retired URLs (`/used-vehicles`, `/transport-support`, `/hair-beauty`, `/fashion`, `/household`, `/shop`, `/cart`).
- **Admin Management Portal:** Available at `/admin` to review submitted service bookings, job applications, and contact messages.

## Frame Extraction Pipeline
```bash
# Extract frames from approved 10s video archives
npm run extract-frames
```

## Production Build & Run
```bash
npm install
npm run build
npm start
```
