# Studio Roko

Single-page demo website for a fictional Croatian barbershop in Osijek. Built as a portfolio project.

**Stack:** React 18 · Vite 5 · Tailwind CSS 3 · Framer Motion 11

## Local development

```bash
npm install
npm run dev
```

The dev server will start on `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The optimized output lands in `dist/`.

## Deploy to Vercel

The repo ships with a `vercel.json` so the project deploys with zero configuration.

**Option A — CLI**

```bash
npm i -g vercel
vercel        # link & deploy a preview
vercel --prod # deploy to production
```

**Option B — Dashboard**

1. Push the repo to GitHub / GitLab / Bitbucket.
2. Open <https://vercel.com/new> and import the repository.
3. Vercel auto-detects Vite. Click **Deploy**.

No environment variables are required.

## Project structure

```
studio-roko/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── WhyUs.jsx
│   │   ├── Booking.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── vercel.json
```

## Customization quick guide

- **Colors** — defined as CSS variables in `src/index.css` and mapped to Tailwind in `tailwind.config.js`.
- **Fonts** — Playfair Display + DM Sans loaded from Google Fonts in `index.html`.
- **Copy & services** — service list lives in `src/components/Services.jsx` and `src/components/Booking.jsx`.
- **Contact info** — phone, address and hours are in `src/components/Booking.jsx` and `src/components/Footer.jsx`.

## Notes

- The booking form is intentionally client-side only — submissions show a success state without contacting a backend. Wire it to your provider of choice (Resend, Formspree, an API route, etc.) when going to production.
- All copy is in Croatian.
