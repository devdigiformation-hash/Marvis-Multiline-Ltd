# MARVIS MULTILINE LTD — FINAL THREE-VIDEO WEBSITE MASTER IMPLEMENTATION PLAN

**Version:** Final approved creative direction, 13 November 2026  
**Purpose:** Transform the EXISTING MARVIS MULTILINE LTD website into a focused, realistic **Car Repairing + Cycle Repairing** business website. **Exactly THREE cinematic videos**: one full-screen combined-workshop hero and two alternating zigzag service videos. This supersedes previous five-category/five-video plans AND the intermediate two-video plan.

## 0. Non-negotiable instructions

- **Implement the final three-video architecture only**. Never keep or reuse the five previous category videos, posters, extracted frame sequences, marketing images or branded workforce graphics on the live site. Inventory dependencies before removal; maintain rollback copies, and delete only confirmed orphaned files.
- Preserve the **existing approved website theme, colour palette, fonts, general design language, approved corporate logo in normal site UI, responsive navigation, functional CTA buttons, existing Careers/jobs/vacancies/salaries/apply buttons and application workflows, verified Management information and management functionality, verified company/contact details, contact forms, and working WhatsApp functionality**. Do not invent or change facts.
- **Replace Careers and Management graphics** depicting fictitious company-branded uniforms, branded team photos, branded premises or a large workforce with modest **generic, unbranded illustrative imagery**. Keep the jobs and management *content and behaviour* unchanged. Do not portray generic people as named real managers or staff; where a verified individual portrait exists, preserve it unless instructed otherwise.
- Generic footage is **illustrative**, not evidence that the company owns the depicted premises, vehicles, equipment or employs the pictured people. Do not assert or visually imply otherwise. Avoid inflated claims about fleet size, large teams, workshops, years of experience, accreditations, customer numbers, ratings or completed work without evidence. No misleading Home Office-facing claims.
- **ABSOLUTE RULE: no public-facing animation diagnostics**: never show `FRAME 1/47`, `0% SCRUBBED`, `CH 01`, `FRAME X/Y`, FPS, chapter counts, progress percentages, ScrollTrigger markers, frame numbers, debug labels, or playback metadata anywhere on or beside the videos. Keep internal scrub/frame calculations functional but invisible. Only footage plus intentional, accessible HTML/CSS marketing headings, descriptions and CTAs may appear.
- No company branding *inside* video imagery, staff clothing, workshops, car bodies, bicycle frames, toolboxes, wall signage, background screens, or generic Careers/Management graphics. Normal MARVIS site header/footer brand identity **is retained**; don't remove the company's actual site logo.
- Use ordinary adult male mechanics with plain work clothes, natural UK workshop appearance; no actor identity continuity required across different videos. Do not add fake corporate uniforms or fictional workforce portraits.
- Avoid editing unrelated working functionality. No automatic deployment without owner approval. Audit current code/assets first; then perform the authorised scoped replacement and test thoroughly.

## 1. Final information architecture: ONLY TWO service categories

**Keep:** Home, About/Management, Careers, Contact, existing verified company information, forms, navigation and footer structure where applicable. Update service-related links to the two final categories.

**Remove/retire:** Used Vehicles, Transport Support, Men's Hair & Beauty, Men's Fashion, Household Products, and all their promotional cards, visual sequences, product galleries, unrelated ecommerce/checkout flows, page banners and service copy. Audit all pages, menus, footer, mobile drawer, image preloads, metadata, sitemap, schema, OG previews, internal links and stale routes. Use appropriate redirects for retired URLs. Do not silently delete unrelated data or break careers/management.

**Final services:**
1. **Car Repairing** — realistic vehicle inspection, engine maintenance and repair; state only services actually offered/confirmed.
2. **Cycle Repairing** — realistic bicycle inspection, brakes, chain, gears, wheel adjustments and repairs; state only services actually offered/confirmed.

Proposed restrained hero copy (HTML/CSS overlay, NOT baked into video):
- **H1:** `Car & Bicycle Repair Services`
- **Supporting line:** `Explore practical car and bicycle repair and maintenance services.`
- **Primary CTA:** `Explore Our Services` → scroll to the two services
- **Secondary CTA:** `Contact Us` → existing contact route/section

Copy must not imply an existing owned workshop or team; adapt wording to verified business status (currently offered vs planned) before publication.

## 2. EXACTLY THREE final cinematic assets — all 10 seconds, 16:9

| Order | Placement | Video | Runtime | Presentation |
|---|---|---|---|---|
| 01 | Homepage TOP HERO | **Full Workshop: Car + Bicycle Repair** | **10 seconds** | **Full-bleed 100% width, safe viewport height, `object-fit: cover` with responsive focal positioning** |
| 02 | Service zigzag 1 | **Car Repairing Process** | **10 seconds** | Center-pinned scrub sequence, video on RIGHT at desktop, copy on LEFT |
| 03 | Service zigzag 2 | **Cycle Repairing Process** | **10 seconds** | Center-pinned scrub sequence, video on LEFT at desktop, copy on RIGHT |

No fourth video. No previous five videos. No additional cinematic Careers/Management video unless the owner separately approves it. Careers/Management use generic still graphics where needed.

### VIDEO 01 — Full Workshop HERO: supplied approved image is authoritative

Use the owner's supplied **full workshop reference image** as the exact starting visual and as the basis of the 10-second approved Google Flow video. It shows:
- **LEFT:** a grey car raised on a blue hydraulic lift; an adult male mechanic in plain navy workwear uses a cordless impact wrench on the raised car's wheel.
- **CENTRE:** a black car with its bonnet open; a second mechanic inspects/works in the engine compartment.
- **RIGHT:** a dark-grey bicycle secured to a blue repair stand; a third mechanic adjusts the rear gear/chain assembly.
- Blue tool cabinet and workshop tools in foreground, overhead workshop lights, tyres on wall racks and clean realistic workshop setting.

**Required motion, ONE CONTINUOUS WIDE SHOT, no cuts:**
- `00:00–00:03`: preserve exact reference composition. All THREE mechanics are simultaneously working: wheel fasteners left, engine centre, bicycle derailleur right. Subtle slow dolly/push-in only.
- `00:03–00:07`: continue independent, physically accurate repair motions; no idle posing. Wheel wrench stays aligned; engine mechanic inspects and adjusts components; bicycle mechanic tests rear wheel and gears. Keep all three workstations in frame.
- `00:07–00:10`: all three continue working, gentle stabilisation or slight pullback, finish on wide clean workshop composition suitable for full-screen hero.

**Strict reference fidelity:** Preserve three mechanics, cars, bicycle, blue lift/repair stand, workshop layout and equipment. No extra people, new cars, morphing, cutaways, branded clothing, logos or text. The source is generic illustrative footage and must not be described as MARVIS's actual workshop.

**Hero UI integration:** Fill the entire top hero area across desktop/mobile; avoid letterboxing, white gaps, distorted aspect ratios or oversized cropping of all key activities. Use responsive cover and media-specific focal points; if 16:9 cannot show all three simultaneously on a narrow phone, use a separate carefully composed mobile crop/poster or a safe visual treatment rather than stretching footage. Overlay H1, supporting copy and two CTAs as real HTML/CSS above the footage with a tasteful gradient/scrim to maintain WCAG AA contrast. Keep text clear of faces and key repair activity when possible. Account for the sticky header and safe-area insets. Autoplay muted/inline loop is acceptable if the existing hero uses playback; if the site architecture uses scroll-driven frames, preserve that behaviour and use the new source. Respect reduced-motion preference (static poster or non-animated alternative). Do not bake website text into the video.

### VIDEO 02 — Car Repairing zigzag

**10-second 16:9 approved car-repair footage**, showing a generic adult male mechanic in plain, unbranded workwear at a modest UK-style automotive repair station.
- `00:00–00:03` inspect car engine with bonnet open.
- `00:03–00:06` accurate ratchet/tool maintenance close-up.
- `00:06–00:08` check component and final inspection.
- `00:08–00:10` stable cinematic repair/workshop shot.

Desktop: visual RIGHT, descriptive copy LEFT. Mobile: visually coherent stacked layout with CTA accessible. No MARVIS marks on equipment, uniforms, walls or cars. Copy only about verifiable car repair services; CTA to enquiry/contact or verified service page.

### VIDEO 03 — Cycle Repairing zigzag

**10-second 16:9 approved bicycle-repair footage**, showing a generic adult male mechanic in plain, unbranded workwear in a modest UK-style cycle workshop.
- `00:00–00:03` inspect bicycle mounted on repair stand and turn rear wheel.
- `00:03–00:06` adjust derailleur and chain with appropriate tools.
- `00:06–00:08` inspect brakes and wheel.
- `00:08–00:10` complete stable final check.

Desktop: visual LEFT, descriptive copy RIGHT. Mobile: readable stacked layout, CTA accessible. No branded bicycle, uniform, wall or tool. Copy only about verifiable cycle repair services.

### Video acceptance and source-integrity protocol

1. Discover supplied final clips and exact paths. If any are missing, **do not fabricate or silently substitute** footage; report missing inputs and retain a clearly identified temporary neutral poster without reusing rejected old graphics.
2. Use `ffprobe` or equivalent to inspect actual duration, dimensions, FPS and codec. Confirm each clip is 10 seconds or explicitly report discrepancies; do not invent frame counts.
3. If scroll-scrubbing uses frame extraction, create sequences from **only the three final approved videos**, preserve frame order, produce a manifest with clip → frames → route/section. Delete old five-video references after dependency checks.
4. No duplicate stale frames, ghost overlays, frame counter labels, or hidden legacy mobile imagery. Optimize image formats, lazy load below-the-fold sequences, preload minimal hero assets, test performance.
5. Preserve smooth forward/reverse scroll scrubbing; keep zigzag visual centre-pinned (or slightly above centre) in the viewport **below the sticky header**; release only when the approved sequence completes. Prevent clipping, scroll traps, and overlay collisions.

## 3. Final homepage structure

1. **Existing Header** — approved company logo, existing styling and functional navigation; update only service links to Car Repairing and Cycle Repairing. Keep any existing prominent Apply Now access.
2. **FULL-SCREEN HERO** — Video 01 combined workshop, premium readable HTML H1/description and Explore Services / Contact Us buttons; safe responsive cropping.
3. **Car Repairing** — zigzag 01, text LEFT and Video 02 RIGHT; clear service summary and enquiry CTA.
4. **Cycle Repairing** — zigzag 02, Video 03 LEFT and text RIGHT; clear service summary and enquiry CTA.
5. **Existing Careers/Jobs** — **preserve original job titles, vacancy counts, salary figures, descriptions, Apply Now buttons, CV uploads, forms, destinations and validation exactly**; replace only old branded team/worker visuals with generic unbranded still images. Never infer or change employment claims.
6. **Existing Management/About** — **preserve verified names, roles, details, structure and working controls**; replace any fictitious branded team graphics or misleading large-staff depictions with restrained neutral visuals. Do not present stock people as named managers.
7. **Existing Contact/WhatsApp/Footer** — preserve verified company details and integrations; update stale service labels, links, metadata. Do not invent phone numbers or WhatsApp destinations.

Keep the existing site's typography, palette, premium spacing, card design, navigation logic and responsive system. Do not duplicate the logo over the hero or add logos inside the videos.

## 4. Graphic replacement rules across the ENTIRE website

- Audit and remove the old five-category images, banners, posters, videos, video frame directories, thumbnails, background images, gallery content, social previews and preload links from all active public surfaces.
- Replace any imagery suggesting MARVIS-branded workers, matching branded uniforms, a dedicated company team, company-owned workshop, branded fleet or company-branded facilities with generic realistic imagery of repair activities, neutral tools or understated non-identifying workshop details.
- For Careers, prefer neutral recruitment/application imagery (documents, hands at a desk, generic unbranded workspace), not an invented uniformed staff lineup.
- For Management, prefer abstract professional office/workflow imagery or verified real portraits supplied by owner; never attach fictional people to real director names.
- Do not use artificial corporate signage or repeated MARVIS logos throughout background visuals. Corporate logo remains only where normal website brand identity requires it (e.g., header/footer).
- Use accessible alt text such as `Illustrative image of a mechanic inspecting a vehicle engine`; do not say `Our mechanics` unless verified.
- Audit textual claims as well as images: remove/flag unverified phrases such as `our workshop`, `our fleet`, `our large team`, `our certified engineers`, `decades of experience`, `hundreds of customers`, etc. Never fabricate testimonials, addresses, opening hours, insurance, accreditations, licensing or company history.

## 5. Navigation, SEO and content migration

- Remove all five old categories from header, mobile menu, services navigation, cards, filters, footer and page hierarchy. Display ONLY `Car Repairing` and `Cycle Repairing` as service categories.
- Retire or redirect old category URLs appropriately; update canonical URLs, sitemap, structured data, titles, descriptions, social cards, accessibility labels and internal links. Avoid broken links and old previews.
- Remove old e-commerce/product checkout UI only where clearly tied to retired categories. Preserve Careers and Management functionality and any unrelated verified business workflows.
- Ensure copy is accurate to the company's actual current or proposed operations. If service provision has not been confirmed, mark the copy for owner approval before publication rather than falsely claiming operations are active.

## 6. Responsive, accessibility and quality requirements

- Viewports: 320, 375, 390, 430, 768, 1024, 1280, 1440 and 1920 px, plus short mobile heights and landscape.
- Header/logo and buttons properly aligned; no overflow, overlap, clipped CTA, or buttons behind sticky header.
- Full-screen hero visual fills width/height, safe area respected, no distortion; maintain readability over changing frames with subtle gradient overlay. Use accessible HTML headings/buttons, not video-embedded typography.
- Two zigzag videos remain smooth and centre-pinned, with no sticky overlap, flicker, blank frames or inaccessible content. Reverse scrubbing works on touch and desktop.
- Touch targets approximately 44×44px minimum where feasible; visible keyboard focus, correct labels for forms, reduced-motion fallback, semantic headings and readable contrast.
- **Zero visible frame/scrub/debug labels** at ALL viewports and through EVERY video sequence. Test DOM text, canvas drawing layers, overlays and ScrollTrigger debug markers; retain calculations internally.
- Confirm all existing Careers/Management/Apply Now/form/WhatsApp interactions remain functional. Do not submit real applications during tests.
- Run TypeScript/build/lint/tests where available; report actual results, screenshots, changed files, and unresolved issues.

## 7. Implementation sequence and approval gates

**Step A — Source/asset inventory:** inspect repo, routes, all five old videos and graphics, Careers and Management assets, and supplied three new clips. Record paths, dependencies, and preservation list; never claim to have inspected files you cannot access.

**Step B — Scoped implementation (authorised by this plan):** remove/retire old category presentation; integrate exactly three approved clips, one full-screen hero and two alternating zigzag sections; update services copy and navigation; replace branded Careers/Management graphics with neutral illustrative assets while preserving their data/functions; retain theme and logo.

**Step C — Verification:** automated and manual visual tests on desktop/mobile; confirm no old category surfaces, old footage, fictitious branded staff imagery, debug overlays, or false ownership claims. Verify exactly three 10-second sources (or report any unavailable/incorrect clip). Confirm all protected job and management information unchanged.

**Step D — Owner review:** provide before/after screenshots, file-change inventory, asset manifest, exact test results and known limitations. **Do not deploy without explicit owner authorisation.**

## 8. Mandatory final report

Provide a concise but complete report with:
1. Removed five legacy categories, routes and assets (exact paths).
2. Three new video sources and their verified durations/resolutions; hero/zigzag placement.
3. Hero full-screen responsive results and overlay text contrast checks.
4. Careers/Management graphics changed and content/functions preserved.
5. Confirmation no fake company-owned workshop/team/vehicle branding remains.
6. Confirmation zero public FRAME/SCRUBBED/FPS/CHAPTER labels.
7. Mobile/desktop screenshots and scrubbing test results.
8. Changed files, build/lint/test results, and any missing assets or facts requiring owner confirmation.

**FINAL ACCEPTANCE:** Existing MARVIS theme and genuine company identity preserved; exactly **3 × 10-second videos** (full-screen combined car+bicycle workshop hero + car-repair zigzag + bicycle-repair zigzag); ONLY **2 service categories**; Careers and Management data and Apply buttons unchanged; their misleading branded visuals replaced with neutral illustrations; all five legacy category videos/graphics removed from the public site; no invented assets or teams; no public video debugging text; smooth responsive cinematic experience; no deployment without approval.
