# Fire & Flavour Restaurant Website

A premium, modern restaurant website for **Fire & Flavour** — a Tandoor, Shawarma & Mughlai cuisine restaurant located in Daltonganj (Medininagar), Jharkhand, India.

---

## Features

- **Hero Section** — Full-screen restaurant photo background with headline and CTA buttons
- **Online Ordering** — Zomato, Call Now, and WhatsApp order buttons
- **About Section** — Restaurant story with exterior photo, rating badge, hours, and location
- **Featured Dishes** — Showcase cards for 6 signature dishes
- **Menu** — All 30+ items across 6 categories (Veg Starters, Non-Veg Starters, Main Course, Breads, Shawarma, Beverages) with live search and category filters
- **Gallery** — 8-image grid with lightbox viewer
- **Reviews** — Fully functional review system (localStorage): submit name, star rating, review text; filter by stars; shows average rating
- **Contact** — Embedded Google Map, phone, address, Call / WhatsApp / Directions buttons
- **Footer** — Social links, quick links, opening hours, copyright
- **Floating Buttons** — WhatsApp and Call buttons always visible; scroll-to-top button
- **Dark / Light Mode** — Toggle in navbar, defaults to light
- **Smooth Animations** — Framer Motion scroll-reveal animations throughout
- **SEO Ready** — Meta tags, Open Graph, structured data (LocalBusiness schema)
- **Mobile-first Responsive** — Optimised for all screen sizes

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite 7 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React + React Icons |
| Routing | Wouter |
| Theme | next-themes |
| UI Components | shadcn/ui (Radix UI) |

---

## Project Structure

```
fire-flavour/
├── public/
│   ├── assets/
│   │   ├── logo.png                  # Restaurant logo
│   │   ├── restaurant-exterior.jpg   # Restaurant photo (hero + about)
│   │   ├── paneer-tikka.png
│   │   ├── chicken-tikka.png
│   │   ├── chicken-shawarma.png
│   │   ├── chicken-angara.png
│   │   ├── matka-paneer.png
│   │   ├── virgin-mojito.png
│   │   ├── gallery-1.png … gallery-8.jpg
│   │   └── hero-bg.png
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── OnlineOrderingSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── FeaturedDishesSection.tsx
│   │   ├── MenuSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── ReviewsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── FloatingButtons.tsx
│   │   └── ui/                       # shadcn/ui components
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   ├── data.ts                   # All menu items, featured dishes, gallery data
│   │   └── utils.ts
│   ├── pages/
│   │   ├── Home.tsx                  # Main page — assembles all sections
│   │   └── not-found.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                     # Tailwind + custom theme (warm cream palette)
├── index.html                        # SEO meta tags + LocalBusiness schema
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## Installation & Local Run

### Prerequisites
- **Node.js** v18 or higher
- **pnpm** v9 or higher (`npm install -g pnpm`)

### Steps

```bash
# 1. Clone or extract the project
cd fire-flavour

# 2. Install dependencies
pnpm install

# 3. Start development server
pnpm dev
```

Open your browser at **http://localhost:5173**

---

## Build for Production

```bash
# Build optimised static files
pnpm build

# Preview the production build locally
pnpm serve
```

The built files will be in the `dist/` folder — ready to deploy to any static host (Netlify, Vercel, GitHub Pages, Hostinger, etc.).

---

## Deployment

### Vercel (recommended — free)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
# Build first
pnpm build
# Then drag the dist/ folder to netlify.com/drop
```

### GitHub Pages
```bash
pnpm build
# Push the dist/ folder contents to your gh-pages branch
```

---

## Customisation

| What to change | Where |
|---|---|
| Menu items & prices | `src/lib/data.ts` |
| Featured dishes | `src/lib/data.ts` → `featuredDishes` |
| Phone / WhatsApp number | `src/components/Navbar.tsx`, `OnlineOrderingSection.tsx`, `ContactSection.tsx`, `Footer.tsx`, `FloatingButtons.tsx` |
| Address & hours | `src/components/AboutSection.tsx`, `ContactSection.tsx`, `Footer.tsx` |
| Logo | Replace `public/assets/logo.png` |
| Restaurant photo | Replace `public/assets/restaurant-exterior.jpg` |
| Food images | Replace files in `public/assets/` |
| Colours | `src/index.css` → `:root` CSS variables |
| Google Maps embed | `src/components/ContactSection.tsx` → `<iframe src="...">` |

---

## Contact (Restaurant)

- **Phone:** +91 74639 69026
- **WhatsApp:** [wa.me/917463969026](https://wa.me/917463969026)
- **Address:** TV Tower, Bairia, Near TV Tower, Medininagar, Jharkhand – 822101
- **Hours:** Mon–Sun, 3:00 PM – 9:00 PM
