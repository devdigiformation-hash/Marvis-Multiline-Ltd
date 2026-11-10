# MARVIS MULTILINE LTD — CINEMATIC SCROLL-DRIVEN E-COMMERCE WEBSITE
## Universal Implementation Master Prompt | Version 1.0 | 10 November 2026

> **ROLE:** You are a senior full-stack engineer, creative director, motion designer, accessibility engineer, and QA lead. Build a production-ready, responsive, premium corporate multi-category e-commerce website for **Marvis Multiline Ltd**. Follow the specification below. Do not claim unimplemented functionality is working.

## 1. Approved company facts and source-of-truth

- **Legal/business name:** Marvis Multiline Ltd
- **Contact email:** cyclecarts@gmail.com
- **Phone:** 07442807141 (UK format as provided; use `tel:+447442807141` only after verifying normalization)
- **Brand identity:** The user's **uploaded original MARVIS MULTILINE LTD logo**, navy-blue M with gold sweeping arc, and original wordmark/tagline. Do not redraw, retype, approximate, or substitute the logo. Preserve its exact aspect ratio and palette. Request original transparent/vector artwork if available; use supplied raster as-is until then.
- **Business divisions:** (1) Used Vehicle Sales, (2) Transport Support, (3) Hair & Beauty Products / Services, (4) Fashion Retail, (5) Household Products Retail.
- **Operating scope:** User confirms all five divisions are active. Do not invent UK addresses, registration numbers, VAT details, opening hours, stock quantities, delivery promises, prices, reviews, certifications, or product claims.
- **Visual casting rule:** No women or female imagery anywhere on the site, including AI-generated imagery, product lifestyle photos, video frames, avatars, or promotional illustrations. Use product-only visuals or male subjects as appropriate. This is a creative casting constraint, not a restriction on who can buy or access the site.
- **Copy:** Public website in polished UK English; technical documentation in English. Contact details must be consistent across footer, header, forms and metadata.

## 2. Non-negotiable creative vision

Build **one main homepage** containing FIVE vertically stacked, cinematic scroll-controlled visual chapters, alternating RIGHT / LEFT / RIGHT / LEFT / RIGHT. This is **NOT a conventional video website** and must not use visible play controls, autoplay video as the primary interaction, or a GIF as the hero.

Each chapter is powered by an ordered **image sequence extracted from the approved 15-second Google Flow video** for that category. The animation is scrubbed deterministically by scroll progress: scrolling down advances frames, scrolling up reverses them. On touch devices, finger scrolling must control the same progress naturally. Keep each section's heading, explanation, and CTA adjacent to its visual; support normal page navigation, not forced scroll-jacking.

### Five chapters and CTA semantics

| Chapter | Desktop visual | Story | Primary CTA | Target |
|---|---|---|---|---|
| 01 Used Vehicles | Right | Branded UK used-car showroom and parked inventory | Explore Vehicles | `/used-vehicles` |
| 02 Transport Support | Left | Same branded truck: loading, dispatch, UK motorway, delivery | Request Transport Quote | `/transport-support#quote` |
| 03 Hair & Beauty | Right | Men's grooming retail shelves and product in customer's hand; **not a barbershop** | Shop Hair & Beauty | `/hair-beauty` |
| 04 Fashion Retail | Left | Men's fashion shop entrance, jackets, coats, shirts, T-shirts, male shopper | Shop Fashion | `/fashion` |
| 05 Household Products | Right | Household shop, cookware, air fryer, vacuum, cleaning supplies, storage | Shop Household Products | `/household` |

On small screens, preserve the alternating editorial feel through accent placement and transitions, but prioritize a readable single-column layout. Never compress the visuals and text into unusably narrow columns.

## 3. Approved video / image references

Use the user's approved images and generated frame sequences, not stock images, as the authoritative source for the cinematic chapters. Source media must be provided in the project asset folder. Do not pretend assets exist if they have not been supplied. For missing sequences, render an honest branded static placeholder with clear internal TODO and request the files.

- Chapter 01: approved Marvis used-vehicle showroom image; black BMW, silver Mercedes, dark Audi, white SUV; fixed showroom and signage.
- Chapter 02: approved Marvis logistics image; navy Mercedes Actros and white branded trailer; registration `MV23 MLT` in the reference; keep vehicle identity consistent.
- Chapter 03: approved men's hair/beauty retail image; product shelves and one male customer holding a bottle; no haircut/barber activity.
- Chapter 04: approved Marvis men's fashion store image; navy/gold signage, suits, jackets, shirts, T-shirts, one male customer.
- Chapter 05: approved Marvis household store image; cookware, appliances, vacuum, towels, cleaning and storage items.

**Source media validation:** Some AI-generated signage and product labels may not exactly match the original brand artwork. The uploaded original logo file is the sole brand authority. Prefer separate exact logo overlays in the UI rather than trusting generated lettering embedded in video frames. Do not silently claim synthetic store scenes are photographs of real premises.

## 4. Frame-sequence preparation pipeline

Each source video is nominally **15 seconds**, 16:9. Do not hard-code a particular frame count or assume the source is 30 fps. Build a reproducible ingestion pipeline:

1. Inspect source video metadata with `ffprobe`: duration, width, height, frame rate, codec and orientation.
2. Extract a configurable sampling rate (default 12 fps, adjustable 8–24 fps depending on motion and performance), preserving source order and timestamps. A 15-second clip at 12 fps yields approximately 180 frames, but actual count depends on the source.
3. Extract lossless PNG masters for QA/archive where storage permits. Encode optimized AVIF/WebP sequences for web delivery, with JPEG fallback where needed. Do not repeatedly recompress JPEG masters.
4. Keep consistent aspect ratio and stable dimensions. Generate responsive variants (e.g. 640, 960, 1280, 1920 widths, only where source resolution supports them). **Never upscale and call it genuine 4K/8K.**
5. Naming: `public/media/chapters/{slug}/{variant}/frame_0001.webp` etc. Generate a JSON manifest with exact frame count, dimensions, frame filenames, sampling fps, aspect ratio and optional poster frame.
6. Inspect for missing/corrupt frames, sudden subject changes, logo deformation, blurred or smeared frames, exposure flicker, duplicated frames, and visual jumps. Flag issues; do not invent fixes or interpolate damaged brand lettering without approval.
7. Provide a CLI script and README for rerunning extraction on replacement source videos. Suggested commands (adjust to actual inputs):

```bash
ffprobe -v error -show_entries format=duration:stream=width,height,r_frame_rate -of json input.mp4
ffmpeg -i input.mp4 -vf "fps=12" frames/frame_%04d.png
# Use a separate batch encoder for optimized responsive WebP/AVIF variants.
```

Use generated manifest data to drive the animation, not a guessed filename count.

## 5. Scroll-driven rendering architecture

Recommended stack: **Next.js + TypeScript + Tailwind CSS + React**, with GSAP ScrollTrigger only if necessary; native scroll + IntersectionObserver + requestAnimationFrame is also acceptable. Choose one coherent approach, not competing scroll engines.

Implement a reusable `ScrollSequence` component accepting `manifest`, `poster`, `alt`, `sectionId`, `fit`, `scrollDistance`, and `reducedMotionFallback`.

**Precise behavior:**

- Determine normalized section progress `p` in [0,1] from its scroll interval.
- Calculate `frameIndex = clamp(round(p * (frameCount - 1)), 0, frameCount - 1)`.
- Paint to `<canvas>` or a carefully managed image layer using `requestAnimationFrame`; only repaint when index changes.
- Size canvas at CSS pixels × capped devicePixelRatio; use correct `object-fit: contain/cover` logic and preserve subject-safe crops.
- Maintain backward scrolling fidelity: frame N back to N-1 without restarting or auto-playing.
- Lazy-load nearby sequences with IntersectionObserver, preload the first poster and a limited frame window, cache within a bounded memory budget, cancel obsolete loads, and avoid decoding hundreds of full-resolution images simultaneously.
- Never load all five full sequences eagerly. Release or prune inactive caches on low-memory devices.
- Use a fixed or sticky visual **within its own chapter**, not a global overlay that obscures navigation or adjacent sections.
- Avoid excessive scroll distances. Aim for ~120–200vh per chapter on desktop, tuned after usability testing; shorter on mobile if necessary. Keep text/CTA reachable throughout.
- On iOS Safari and Android Chrome, support natural touch scrolling and address-bar resizing without jumpy frame indexes.
- Do not hijack wheel or touch events or disable native scrolling.
- Show a high-quality poster immediately while frames are loading; if a frame fails, retain the last valid frame.
- Respect `prefers-reduced-motion`: render a static poster and fully functional content, no forced animation.
- Add optional progressive enhancement for slower devices: lower-resolution sequence or lower sample rate.
- Preserve SEO: actual HTML text and links must remain visible to crawlers and assistive technology; canvas is decorative and `aria-hidden` where appropriate.

### Performance and clarity

Aim for smooth, responsive interaction, not a false promise of fixed 60 fps on every phone. Test CPU, memory, LCP, CLS, INP and real mobile responsiveness. Use appropriate image decoding, caching, preloading and compression. Keep the first chapter's initial poster lightweight and prioritized; defer all other sequences. Frame sharpness is essential because the site uses individual frames, but do not sacrifice mobile usability by shipping five giant image sets on initial load.

## 6. Homepage information architecture

1. Sticky, accessible header: exact Marvis logo, navigation, category dropdown, search, account/cart if enabled, contact CTA, mobile menu.
2. Elegant brand-introduction hero: exact logo, succinct value proposition describing five active divisions, anchor navigation. Avoid fabricated claims.
3. Five alternating scroll chapters in the specified order. Each contains short editorial copy, 2–4 authentic category highlights, one clear primary CTA, optional secondary CTA, and a scroll-driven image sequence.
4. Featured categories / featured approved products, only if real catalogue data is present.
5. How enquiries/orders work, distinguishing vehicle enquiries, transport quotes and retail checkout.
6. Trust/FAQ section with factual copy only; do not invent testimonials, accreditation, or guarantees.
7. Contact section: email, phone, enquiry form with spam protection and privacy disclosure.
8. Full footer: five category links, policies, contact information, copyright, social links only if supplied.

Use subtle transitions, navy-and-gold brand accents, crisp typography, accessible contrast, generous whitespace, and modest micro-interactions. No overdone parallax, noisy gradients, fake 3D models, or heavy loading screens.

## 7. Required pages and route architecture

- `/` — cinematic homepage.
- `/used-vehicles` — inventory list with filters (make/model, year, mileage, fuel, transmission, price if provided); `/used-vehicles/[slug]` detail page with gallery, specs, condition notes, enquiry CTA. Do not fake vehicle availability, mileage or prices.
- `/transport-support` — service scope, service areas only when verified, operational process, vehicle/fleet imagery if approved, and detailed quote form (pickup/drop-off, cargo description, dimensions/weight if applicable, desired date, contact). Quote requests are **not** instant confirmed bookings.
- `/hair-beauty` — men's grooming and cosmetics product catalogue; `/hair-beauty/[slug]` detail pages, ingredients and usage only when verified. Do not make unsubstantiated cosmetic/medical claims.
- `/fashion` — men's apparel catalogue with size, colour, type, price and stock filters; `/fashion/[slug]` details with variants and size guide where provided.
- `/household` — household essentials, kitchenware, cleaning, appliances and storage; `/household/[slug]` details and specifications.
- `/shop` — optional combined searchable retail catalogue with clear category filtering.
- `/cart`, `/checkout`, `/order-confirmation` — only activate payment/ordering after a real commerce backend and payment provider are configured. Otherwise use clearly labelled enquiry-only demo mode.
- `/about`, `/contact`, `/faq`, `/privacy`, `/terms`, `/returns`, `/shipping` — publish policies only after the owner supplies/approves the necessary legal and operational facts.
- `/account`, `/orders` — optional if authenticated checkout/order history is approved and implemented securely.

Every category must be reachable from header, homepage, footer, and relevant cross-links. Use breadcrumbs and canonical URLs on category/detail pages.

## 8. E-commerce backend and catalogue model

Build a real data-backed catalogue and administration system, not hardcoded fake product cards. Suggested entities:

`Category`, `Product`, `ProductVariant`, `ProductImage`, `Inventory`, `VehicleListing`, `TransportEnquiry`, `Customer`, `Cart`, `CartItem`, `Order`, `OrderItem`, `Payment`, `ShippingAddress`, `ContactEnquiry`, `MediaAsset`, `SeoMetadata`.

Fields must cover SKU, slug, title, description, approved imagery, price currency (GBP), tax handling if confirmed, inventory status, variants, category, publication state, and audit timestamps. For vehicles include year, mileage, condition, registration masking rules, specs, price/enquiry-only flag. For transport include quote request details, status and admin response.

**Payments:** Integrate a real PCI-compliant hosted checkout such as Stripe Checkout only when the owner supplies credentials, supported business/account details, shipping/tax rules and approval. Never store raw card details. No fake payment success screens or orders.

**Admin:** Role-protected dashboard to create/edit/unpublish products, manage variants, stock, media, enquiries and orders. Validate all inputs server-side; enforce authorization and rate limits. Keep secrets in environment variables, not client code.

**Commerce workflows:** Cart totals must be server-validated. Orders, inventory changes and payment webhooks must be idempotent. Support real shipping rules, returns policy and taxes only after owner configuration. If not configured, show a clearly marked preview and disable real checkout.

## 9. AI-generated product images: approved workflow

Generate high-quality, category-appropriate product visuals **only as design concepts or clearly disclosed illustrative catalogue assets until product identity, specifications, price, rights and availability are verified by the owner**. Do not invent stock, fake product brands, or present a synthetic image as a real photographed item for sale.

For each approved real product, create a consistent visual set: clean packshot, alternate angle, detail shot, and optional lifestyle shot (male-only where people appear). Match actual product packaging and specifications; if accuracy cannot be guaranteed, use the real supplier photo instead. Do not place Marvis branding on third-party products unless authorized. Maintain consistent lighting, crop, backgrounds and dimensions. Use descriptive alt text and preserve source/approval metadata.

Provide admin workflow: `Draft → Awaiting Verification → Approved → Published`. Do not publish placeholders as purchasable inventory.

## 10. UX, mobile, accessibility, SEO

- Mobile-first responsive layout for 320px to large desktop widths.
- Finger-driven scroll must scrub frames smoothly; tap targets ≥44 CSS px where practical.
- Clear sticky header, accessible hamburger menu, search, cart and forms.
- Keyboard navigation, visible focus, semantic landmarks, descriptive alt text, error messages and accessible form labels.
- Target WCAG 2.2 AA where feasible, including reduced motion and colour contrast.
- SEO: server-rendered headings and product data, metadata, XML sitemap, robots, canonical tags, Product schema only for verified products, Organization schema only with verified details, BreadcrumbList, clean URLs.
- Avoid showing prices/ratings in structured data that are not real.
- Performance: optimized images, responsive srcsets, lazy-load offscreen content, code splitting, font optimization, sensible caching.
- Analytics and cookie consent only after privacy requirements and owner preferences are confirmed.

## 11. Build order and approval gates

**PHASE A — READ-ONLY AUDIT:** Inspect existing repository, current framework, uploaded brand assets and media; inventory missing dependencies and ask only essential questions. Do not overwrite existing code or assets before reporting findings.

**PHASE B — DESIGN SYSTEM:** Exact brand assets, colours sampled from approved logo, typography, responsive layouts, component library, header/footer, chapter wireframes. Get owner approval.

**PHASE C — FRAME PIPELINE:** Validate five videos; generate frame manifests, posters, optimized variants; QA image quality and identity consistency. Get owner approval.

**PHASE D — CINEMATIC HOMEPAGE:** Build scroll-sequence component, five alternating chapters, touch and desktop behavior, reduced-motion fallbacks. Get owner approval.

**PHASE E — CATEGORY PAGES:** Build five categories and detail page templates, filters, enquiries and cross-navigation. Get owner approval.

**PHASE F — E-COMMERCE:** Integrate approved real catalogue, admin, cart and secure checkout if configured; otherwise clearly flagged enquiry/demo mode. Get owner approval.

**PHASE G — TEST & RELEASE:** Run QA, fix regressions, test on real mobile devices and browsers, document deployment and content-management process. Do not deploy without approval.

At every phase: show what changed, files modified, screenshots or test evidence, remaining risks and explicit approval request. No unapproved redesign of logo, branding or supplied assets.

## 12. QA acceptance criteria

1. Homepage contains exactly five cinematic chapters in the required business order and right/left alternation on desktop.
2. No video play buttons or primary autoplay video; image frames respond directly and reversibly to native scroll/touch.
3. First-frame posters load quickly; other sequences load only near viewport; no blank sections on network failure.
4. No flicker, frame gaps, image stretching, wrong aspect ratio, accidental logo changes or obvious frame quality defects.
5. The site remains usable with JavaScript disabled to the extent possible: server-rendered content and links still exist; motion degrades gracefully.
6. Mobile touch scrolling, orientation changes and browser chrome resizing work without scroll locks.
7. All five category pages, detail templates, navigation, enquiry forms and CTA targets function.
8. Real product purchases cannot occur without verified products, configured pricing/stock, shipping/tax rules and payment backend.
9. No women or female imagery in the creative assets, per approved direction.
10. No fabricated business address, product inventory, reviews, prices, promises or certifications.
11. Accessibility, SEO, responsive, performance and security checks have documented results.
12. Original Marvis logo file is used consistently in all UI sections; source-frame lettering errors are flagged.

## 13. Required final deliverables

- Full source repository with installation instructions and `.env.example` (no secrets).
- Production-ready responsive site, reusable components, and five category page templates.
- Video-to-frame extraction script, five manifests and documented asset directory structure.
- Admin/catalogue management, enquiry workflows and commerce integration status clearly labelled.
- Test plan/results, accessibility and performance report, deployment instructions and rollback notes.
- Clear list of missing owner inputs and any features deliberately left in preview mode.

## 14. Owner inputs still needed before real sales launch

- Final logo asset in highest-quality transparent/vector form (if available).
- Five approved 15-second video files and permission to use them.
- Verified company address and legal/policy details for public display.
- Actual products, descriptions, prices, SKUs, variants, stock, supplier rights and product images.
- Vehicle listings with true condition/specification/price details.
- Transport coverage, operational constraints and quote policy.
- Shipping, returns, tax, payment provider, and fulfilment rules.
- Domain/hosting and preferred commerce backend, if any.

**FINAL DIRECTIVE:** Deliver an elegant, trustworthy, visually stunning Marvis Multiline Ltd website that combines cinematic scroll-scrub storytelling with functional, verified multi-category commerce. Prioritize exact branding, frame-by-frame sharpness, mobile performance, accessibility, and honest product data over visual gimmicks. Begin with a read-only project audit and implementation plan; do not change existing project files until approved.
