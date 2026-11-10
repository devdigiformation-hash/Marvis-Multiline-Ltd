# Marvis Multiline Ltd — Cinematic Scroll-Driven E-Commerce Platform

A production-grade, highly responsive multi-category commercial website for **Marvis Multiline Ltd**, engineered with Next.js 14, TypeScript, Tailwind CSS, and a scroll-driven canvas frame sequence pipeline.

## Approved Company Profile
- **Legal Entity:** Marvis Multiline Ltd
- **Contact Email:** cyclecarts@gmail.com
- **Direct Telephone:** 07442807141 (`tel:+447442807141`)
- **Brand Identity:** Original Navy-Blue & Gold Arc Marvis Multiline Corporate Logo

## 5 Integrated Operating Divisions
1. **01 Used Vehicle Sales** (`/used-vehicles`) — Verified pre-owned UK showroom stock with mileage and HPI history verification.
2. **02 Transport Support** (`/transport-support`) — Dedicated point-to-point trunking & nationwide haulage powered by the flagship Mercedes-Benz Actros fleet (Reg: MV23 MLT).
3. **03 Hair & Beauty Products** (`/hair-beauty`) — Clean, paraben-free gentleman's grooming formulations (beard elixirs, matte styling clay, revitalizing scalp cleansers).
4. **04 Fashion Retail** (`/fashion`) — Structured British tailored wool-blend overcoats, 100% combed Oxford cotton shirts, and 240gsm heavyweight organic cotton t-shirts.
5. **05 Household Products Retail** (`/household`) — Digital rapid multi-cooker air fryers, tri-ply induction stainless cookware, and cyclonic HEPA vacuum cleaners.

## Technical Architecture
- **Framework:** Next.js 14 (App Router) + React 18 + TypeScript
- **Styling:** Tailwind CSS with official brand palette (Corporate Navy `#001F49`, Warm Royal Gold `#C59B4E`, Dark Surface `#040D1A`)
- **Cinematic Engine:** Custom scroll-progress scrubber using HTML5 `<canvas>` and `requestAnimationFrame`. Automatically scrubs 75 Full HD frames per chapter smoothly forwards and backwards.
- **Mobile & Touch:** Responsive single-column touch scrubbing, drawer navigation, accessible tap targets (≥44px).
- **Commercial Flows:** Interactive cart drawer with local ledger, transport quote calculator, and vehicle viewing appointment scheduler.
- **Admin Management Portal:** Available at `/admin` to review submitted orders, freight quotes, and customer messages.

## Frame Extraction Pipeline
```bash
# Rerun frame extraction on any updated source media
npm run extract-frames
```

## Production Build & Run
```bash
npm install
npm run build
npm start
```
