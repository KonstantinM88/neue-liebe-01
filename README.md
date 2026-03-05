# Neue Liebe – Restaurant Website

Premium restaurant website built with **Next.js 15**, **TypeScript 5.9**, **Prisma 6.19** and **PostgreSQL**.

## Tech Stack

| Tool | Version |
|------|---------|
| Next.js | 15.2.4 |
| React | 19 |
| TypeScript | 5.9.3 |
| Prisma | 6.19.2 |
| Node.js | v22.14.0 |

> **Note:** Next.js v16 does not exist yet. This project uses **15.2.4** (latest stable).

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Setup environment

```bash
cp .env.example .env
```

Edit `.env` and set your PostgreSQL connection string:

```
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/neue_liebe"
```

### 3. Initialize database

```bash
npx prisma generate
npx prisma db push
```

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + metadata (SEO)
│   ├── page.tsx            # Home page – assembles all sections
│   ├── globals.css         # Global CSS variables + utility classes
│   └── api/
│       └── reservations/
│           └── route.ts    # POST /api/reservations (saves to DB)
├── components/
│   ├── Navigation.tsx      # Fixed nav + language switcher DE/EN
│   ├── Loader.tsx          # Branded intro loader
│   ├── Cursor.tsx          # Custom gold cursor with trailing ring
│   ├── ScrollProgress.tsx  # Top scroll progress bar
│   ├── Hero.tsx            # Fullscreen cinematic hero
│   ├── InfoBar.tsx         # Address / phone / hours bar
│   ├── About.tsx           # About section with floating images
│   ├── Experience.tsx      # 3 experience cards (Terrace, Banquet, Dance)
│   ├── MenuSection.tsx     # Filtered menu grid
│   ├── ParallaxQuote.tsx   # Parallax quote section
│   ├── Gallery.tsx         # Editorial gallery grid
│   ├── Events.tsx          # Events/celebrations section
│   ├── Reservation.tsx     # Reservation form → POST /api/reservations
│   ├── Contact.tsx         # Contact info + Google Maps
│   └── Footer.tsx          # Footer with social links
├── context/
│   └── LanguageContext.tsx # DE/EN language context
├── hooks/
│   └── useReveal.ts        # IntersectionObserver reveal hook
└── lib/
    └── prisma.ts           # Prisma singleton

prisma/
└── schema.prisma           # Reservation model
```

## SEO Keywords

- Restaurant Nebra
- Restaurant Unstrut
- Restaurant Nebra Terrasse
- Neue Liebe Nebra

## Features

- ✅ Bilingual DE / EN switcher
- ✅ Custom gold cursor + trailing ring
- ✅ Cinematic hero with zoom animation
- ✅ Parallax scrolling quote section
- ✅ Scroll-triggered reveal animations
- ✅ Filtered menu grid
- ✅ Reservation form → PostgreSQL via Prisma
- ✅ Google Maps embed
- ✅ Mobile responsive + hamburger menu
- ✅ SEO metadata
- ✅ Next.js Image optimization
# neue-liebe
