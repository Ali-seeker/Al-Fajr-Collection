# DESIGN.md
# AI-Fajr Collection — Luxury B2B Fashion Design System

## 1. PURPOSE

This file is the single source of truth for all UI/UX implementation in this project.

IMPORTANT:

Before implementing ANY UI-related task, AI coding agents MUST read this file.

This includes:

- New pages
- Components
- Product cards
- Product detail pages
- Forms
- Buttons
- Navigation
- Animations
- Responsive layouts
- Modals
- Filters
- Galleries
- Admin-facing UI that shares the brand
- Any visual redesign

The agent must follow this design system instead of inventing a new visual style.

The existing Home Page is the primary visual reference.

DO NOT redesign the Home Page unless explicitly instructed.

---

# 2. BRAND

The website represents a premium Pakistani/South Asian ladies fashion wholesale business.

Business model:

- B2B
- Wholesale
- Retailer focused
- Boutique focused
- Bulk orders

Brand personality:

- Premium
- Elegant
- Editorial
- Sophisticated
- Fashion-forward
- Trustworthy
- Minimal
- Cinematic

The website should feel closer to a luxury fashion house / fashion editorial than a generic ecommerce store.

DO NOT make it look like:

- Generic Shopify
- Basic ecommerce
- Marketplace
- Cheap fashion catalog
- SaaS dashboard
- Corporate template

---

# 3. COLOR SYSTEM

Primary background:

#090B09

Dark green:

#101A15

Secondary dark green:

#0E1712

Cream:

#EEE5D7

Primary light text:

#F3EDE3

Gold:

#C9A66B

Light gold:

#E0C28E

Muted text:

#AAA398

Dark text:

#191713

Rules:

- Gold is an accent, not the dominant color.
- No neon colors.
- No bright blue/purple SaaS palettes.
- No random colors.
- Gradients must be subtle and atmospheric.
- Warm cinematic lighting is acceptable.

---

# 4. TYPOGRAPHY

Display / editorial font:

Cormorant Garamond

Use it for:

- Hero headings
- Page headings
- Editorial headings
- Product names
- Large statements

Body font:

Inter

Use it for:

- Navigation
- Buttons
- Descriptions
- Forms
- Product metadata
- Utility text

Large headings should be:

- Elegant
- Large
- Tight
- High contrast
- Sometimes italicized

Small utility text:

- Uppercase
- 9–11px
- Letter spacing approximately 0.15em–0.35em

---

# 5. SPACING

Use generous whitespace.

Desktop page padding:

48px–80px

Mobile page padding:

20px–24px

Typical content max width:

1280px–1500px

Do not overcrowd sections.

Negative space is an intentional part of the design.

---

# 6. NAVBAR

The existing Home Page Navbar is the reference.

All pages MUST reuse:

src/components/navigation/Navbar.tsx

Do not create separate navbar designs.

Navbar characteristics:

- Transparent over hero
- Dark translucent background after scroll
- Thin border when scrolled
- Elegant logo
- Small uppercase navigation
- Gold accent
- Become a Partner CTA
- Login/Register control
- Smooth mobile menu

Navigation:

Home
Collections
About Us
Wholesale
Lookbook
Contact

Primary CTA:

Become a Partner

---

# 7. FOOTER

Reuse:

src/components/navigation/Footer.tsx

Do not create different footer designs for individual pages.

Footer remains:

- Dark
- Minimal
- Editorial
- Thin borders
- Small typography
- Brand information
- Navigation
- Wholesale information
- Social links
- Newsletter
- Privacy / Terms

---

# 8. BUTTONS

Primary button:

- Cream/gold background
- Dark text
- Small uppercase text
- Slight hover lift
- Subtle transition

Secondary button:

- Transparent
- Thin border
- Light text

Examples:

EXPLORE COLLECTIONS →
BECOME A PARTNER
VIEW LOOKBOOK →
ORDER NOW →

Avoid:

- Huge pill buttons
- Excessive rounded corners
- Neon colors
- Gradient buttons
- Cartoon effects

Preferred radius:

2px–8px

---

# 9. HERO

The current Home Page Hero is the main reference.

Characteristics:

- Dark cinematic background
- Large serif typography
- Gold italic emphasis
- Editorial copy
- Product/mannequin on right
- Wooden/bronze platform
- Atmospheric glow
- Parallax
- Scroll-driven movement
- Continuous product rotation

The product should remain the primary visual focus.

Animation libraries:

GSAP:
- ScrollTrigger
- Parallax
- Horizontal scrolling
- Continuous product rotation

Framer Motion:
- Page entrances
- Reveal animations
- Small interactions

React Three Fiber:
Only use when actual 3D is genuinely required.

Do not add WebGL just for decoration.

---

# 10. ANIMATION LANGUAGE

Animations must feel:

- Slow
- Smooth
- Elegant
- Cinematic
- Intentional

Preferred durations:

Small UI:
200–400ms

Content reveal:
600–1000ms

Hero:
1000–1800ms

Editorial transitions:
800–1400ms

Continuous rotation:
18–45 seconds

Preferred easing:

power2.out
power3.out
power4.out
expo.out
none

Avoid:

- Bouncy animations
- Excessive spring animations
- Shaking
- Random motion
- Over-animation
- Fast distracting transitions

Not every element needs animation.

---

# 11. PAGE DESIGN LANGUAGE

Pages should use:

- Editorial layouts
- Asymmetrical compositions
- Large imagery
- Large typography
- Thin borders
- Negative space
- Cinematic image treatment
- Scroll reveals
- Parallax
- Subtle hover interactions

Avoid making every page a standard centered card/grid layout.

---

# 12. COLLECTIONS

Collections should feel like a fashion editorial.

Use:

- Large product imagery
- Minimal product information
- Elegant hover effects
- Category/filter controls where needed
- Asymmetric layouts
- Smooth reveal animations

Product cards should contain:

- Image
- Product name
- Category
- Optional wholesale information
- Minimal CTA

Avoid:

- SALE badges
- Cheap discount stickers
- Excessive labels
- Multiple buttons
- Marketplace-style cards

---

# 13. PRODUCT DETAIL

Product detail page should feel like a luxury product showroom.

Recommended structure:

1. Large product gallery
2. Product name
3. Collection
4. Description
5. Fabric
6. Colors
7. Wholesale information
8. MOQ
9. Order CTA
10. WhatsApp/contact CTA
11. Related products

The main product image should be visually dominant.

Use large imagery and generous whitespace.

---

# 14. WHOLESALE

Wholesale is a major B2B conversion page.

Communicate:

- Who we serve
- Wholesale benefits
- MOQ
- Bulk orders
- Quality
- Supply reliability
- Packaging
- Delivery
- Business support
- Ordering process

Suggested process:

01 — Choose Collection
02 — Select Products
03 — Confirm Quantity
04 — Place Order
05 — We Prepare & Dispatch

End with:

BECOME A WHOLESALE PARTNER

---

# 15. ABOUT

About page should communicate:

- Brand story
- Craftsmanship
- Quality
- Wholesale philosophy
- Retailer relationships
- Business reliability
- Fashion identity

Use:

- Editorial hero
- Large imagery
- Story sections
- Statistics
- Craftsmanship section
- Brand philosophy
- CTA

---

# 16. LOOKBOOK

Lookbook is primarily visual.

Prioritize:

- Large images
- Editorial spacing
- Full-width images
- Asymmetric grid
- Parallax
- Image reveal
- Hover movement

Keep text minimal.

---

# 17. CONTACT

Contact page should include:

- Editorial heading
- Contact information
- WhatsApp
- Email
- Location
- Business hours if available
- Contact form

Primary CTA:

START A CONVERSATION

Keep the form elegant and minimal.

---

# 18. BECOME A PARTNER

This is the B2B lead-generation page.

Include:

- Strong heading
- Partnership benefits
- Wholesale requirements
- Business inquiry form

Form fields:

- Full Name
- Business / Shop Name
- WhatsApp
- Email
- City
- Business Type
- Estimated Order Volume
- Message

The form must look premium, not like a generic SaaS form.

---

# 19. ORDER

Order page should be conversion-focused.

Left side:

- Product image
- Product name
- Quantity
- Wholesale information

Right side:

- Customer information

Fields:

- Full Name
- Business Name
- Phone
- WhatsApp
- Email
- City
- Complete Address
- Quantity
- Notes

Then:

- Order summary
- Submit Order

Do not implement payment unless explicitly requested.

---

# 20. IMAGE STYLE

Use:

- Pakistani/South Asian ladies fashion
- Premium suits
- Lawn
- Embroidery
- Luxury festive wear
- Editorial photography
- Warm cinematic lighting
- Neutral/earthy tones

Avoid:

- Generic western fashion
- Men's clothing
- Low-quality stock photos
- Watermarks
- Random visual styles

Use Next.js Image wherever appropriate.

---

# 21. RESPONSIVE

Every page must work on:

- Desktop
- Laptop
- Tablet
- Mobile

Mobile is NOT just a smaller desktop.

On mobile:

- Stack layouts intelligently
- Reduce heading sizes
- Preserve whitespace
- Maintain important CTAs
- Avoid horizontal overflow
- Keep animations smooth
- Reduce animation intensity if necessary

---

# 22. ACCESSIBILITY

Use:

- Semantic HTML
- Correct heading hierarchy
- Alt text
- Keyboard navigation
- Focus states
- Good contrast
- Reduced-motion support

Respect:

prefers-reduced-motion

---

# 23. PERFORMANCE

Do not sacrifice performance for visual effects.

Prefer:

- CSS transforms
- GPU-friendly animations
- Optimized images
- Lazy loading
- Proper Next.js Image usage
- GSAP only where necessary

Avoid unnecessarily heavy WebGL.

---

# 24. COMPONENT ARCHITECTURE

Existing shared components:

src/components/navigation/

Existing Home sections:

src/components/sections/

Page-specific components:

src/components/pages/

Structure:

src/components/pages/
├── about/
├── collections/
├── wholesale/
├── lookbook/
├── contact/
├── become-a-partner/
├── product/
└── order/

Reuse components wherever possible.

Do not duplicate Navbar/Footer.

---

# 25. DATA

Current static data:

src/config/data.ts

Do not scatter repeated data across components.

Future content will come from the database/admin dashboard.

Components should be designed so static mock data can later be replaced by database data without redesigning the UI.

---

# 26. STRICT AI RULES

Before implementing ANY UI task:

1. Read this file.
2. Inspect existing components.
3. Reuse existing design tokens.
4. Reuse existing Navbar/Footer.
5. Preserve the existing visual language.
6. Use existing animation libraries.
7. Maintain responsive behavior.
8. Test the result.

NEVER:

- Invent a new color palette
- Introduce a generic ecommerce design
- Replace the typography unnecessarily
- Redesign the Navbar
- Redesign the Footer
- Add excessive rounded cards
- Add random gradients
- Add random animations
- Install unnecessary UI libraries
- Replace GSAP without a strong reason
- Modify unrelated pages
- Change the Home Page unless explicitly requested

---

# 27. DEFINITION OF DONE

A UI task is complete only when:

- It follows this design system.
- It visually belongs to the same website.
- Desktop works.
- Mobile works.
- Animations work.
- No horizontal overflow exists.
- Images load correctly.
- No console errors exist.
- TypeScript/build passes.
- Existing pages remain unaffected.