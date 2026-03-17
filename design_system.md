# 24 Karat Bakery — Design System

## Fonts

| Font | Usage | Weight(s) |
|------|-------|-----------|
| **Anton** | Headlines, prices, CTAs, nav buttons | 400 |
| **Montserrat** | Body text, descriptions, labels, form inputs | 500, 600, 700, 800 |
| **Open Sans** | Section subtext (Bread Club), story links | 400 |

---

## Typography by Section

### Navbar
| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| Nav links | System/Montserrat | `0.85rem` | 700 | `#242725` (scrolled), `white` (hero) |
| PRE ORDER NOW | Anton | `0.85rem` | 400 | `#F6F4E3` on `#3F2320` bg |
| GIFTCARD | Montserrat | `0.85rem` | 700 | `#242725` |

### Hero
| Element | Font | Size | Weight | Line Height | Color |
|---------|------|------|--------|-------------|-------|
| H1 | Anton | `clamp(1.6rem, 8vw, 4.2rem)` | 400 | 1.05 | `white` |
| Sub-heading | Montserrat | `clamp(0.95rem, 3vw, 1.15rem)` | — | 1.6 | `rgba(255,255,255,0.9)` |
| CTA Button | Anton | `clamp(0.9rem, 4vw, 1.1rem)` | 400 | — | `#2B2828` on `#F5F3E3` |

### Section 1 — Bread Club
| Element | Font | Size | Weight | Line Height | Color |
|---------|------|------|--------|-------------|-------|
| Heading | Montserrat | `clamp(1.4rem, 4vw, 2.2rem)` | 800 | 1.1 | `#372720` |
| Subtext | Open Sans | `clamp(0.85rem, 2.5vw, 0.95rem)` | — | 1.8 | `#4a4a4a` |
| Link | Montserrat | `1rem` | — | 1 | `#4a4a4a` |

### Section 2 — Ownership
| Element | Font | Size | Weight | Line Height | Color |
|---------|------|------|--------|-------------|-------|
| Title | Anton | `clamp(1.8rem, 8vw, 3rem)` | — | 1.1 | `#f6f4e3` |
| Description | Montserrat | `clamp(0.9rem, 2.5vw, 1rem)` | — | 1.6 | `#f6f4e3` |
| Tier H3 | Anton | `clamp(1.2rem, 5vw, 1.8rem)` | — | 1 | `#f6f4e3` |
| Share count | Montserrat | `0.8rem` | 500 | — | `#f6f4e3` |
| Perks title | Montserrat | `0.95rem` | 800 | — | `#f6f4e3` |
| Tier description | Montserrat | `0.75rem` | 500 | 1.4 | `#f6f4e3` |
| Tier items | Montserrat | `0.8rem` | — | 1.4 | `#f6f4e3` |
| Price | Anton | `clamp(3rem, 15vw, 6rem)` | — | 0.8 | `white` |
| Widget header | Anton | `2.8rem` | 400 | 0.9 | `#2D1B14` |
| Total row | Anton | `1.8rem` | 400 | — | `#2D1B14` |
| Checkout btn | Anton | `1.2rem` | 400 | — | `#f6f4e3` on `#3F2320` |

### Section 3 — Waitlist
| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| Title | Anton | `clamp(2.5rem, 10vw, 5rem)` | 400 | `#242725` |
| Description | Montserrat | `clamp(1.1rem, 4vw, 1.25rem)` | — | `#242725` |
| Card title | Montserrat | `1.1rem` | 800 | `#242725` |
| Labels | Montserrat | `0.75rem` | 800 | `#242725` |
| Submit btn | Anton | `1.3rem` | 400 | `#F6F4E3` on `#242725` |

### Section 4 — Story
| Element | Font | Size | Weight | Line Height | Color |
|---------|------|------|--------|-------------|-------|
| Title | Anton | `clamp(1.8rem, 4vw, 2.8rem)` | — | 1.3 | `#242725` |
| Description | Montserrat | `1.2rem` | — | 1.7 | `#242725` |

### Section 5 — About
| Element | Font | Size | Weight | Line Height | Color |
|---------|------|------|--------|-------------|-------|
| Title | Anton | `clamp(1.8rem, 8vw, 3.8rem)` | — | — | `#242725` |
| Body | Montserrat | `1.15rem` | 800 | 1.6 | `#242725` |
| Discover btn | Montserrat | — | 800 | — | `#F6F4E3` on `#2D1B14` |

### Footer FAQ
| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| Title | Anton | `clamp(1.8rem, 5vw, 2.5rem)` | 400 | `#372720` |
| Questions | Montserrat | `1rem` | 700 | `#372720` |
| Answers | Montserrat | `0.95rem` | — | `#555` |

---

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Bakery Brown | `#372720` | Primary text, footer, FAQ |
| Dark Brown | `#2D1B14` | Ownership bg, buttons, widget |
| Button Brown | `#3F2320` | Checkout buttons |
| Charcoal | `#242725` | Navbar links, waitlist, body text |
| Cream | `#F6F4E3` | Section backgrounds, button text |
| Light Cream | `#fdfbf7` | Bread Club bg |
| Off-White | `#F9F5F2` | Membership widget bg |
| Body Gray | `#4a4a4a` | Subtext |
| Muted Gray | `#666` | Descriptions, notes |
| Green accent | `#1e6b3e` | Add-to-cart buttons |

---

## Spacing

### Section Padding (vertical)
| Section | Padding |
|---------|---------|
| Hero | `clamp(100px, 15vh, 150px)` top, `60px` bottom |
| Bread Club | `40px` top, `100px` bottom |
| Ownership | `80px` top & bottom |
| Waitlist | `120px` top & bottom |
| Story | `100px` top & bottom |
| About | `100px` top & bottom |
| Footer | `80px` top & bottom |

### Container
- Max-width: `1300px` (default), `1400px` (some sections use `max-width: none`)
- Horizontal padding: `40px`

### Common Gaps
| Context | Gap |
|---------|-----|
| Bread grid | `20px` |
| Tier cards | `20px` |
| Story images | `20px` |
| Waitlist flex | `60px` |
| Story flex | `80px` |
| Product grid | `30px` |
| Carousel | `30px` |

---

## Responsive Breakpoints

| Breakpoint | Changes |
|------------|---------|
| `1250px` | Tiers stack vertically |
| `1024px` | Bread layout stacks, product grid → 3 columns |
| `900px` | Tier cards → 2 columns |
| `768px` | Nav links hidden, mobile menu enabled, product grid → 2 columns, bread grid → single column, story images stack |

---

## File Structure (After Refactoring)

```
src/
├── App.jsx              ← 175 lines (routing + state only)
├── App.css              ← All styles (unchanged)
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Section1.jsx     ← Bread Club
│   ├── Section2.jsx     ← Ownership + Tier Cards + FAQ
│   ├── Section3.jsx     ← Waitlist Form
│   ├── Section4.jsx     ← Story
│   ├── Section5.jsx     ← About + Carousel
│   ├── Section6.jsx     ← Contact Form
│   ├── Section7.jsx     ← Presale Menu
│   ├── FAQSection.jsx   ← Footer FAQ
│   ├── Footer.jsx
│   ├── MenuPage.jsx     ← Store page + ProductSubHeader + ProductCardV2
│   ├── CartPage.jsx
│   └── ProductDetailPage.jsx
├── data/
│   └── products.js      ← All 16 product objects
└── utils/
    └── checkout.js      ← redirectToCheckout helper
```
