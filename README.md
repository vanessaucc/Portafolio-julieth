# Vanessa Mena — Portfolio

Personal developer portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Features a bilingual UI (ES/EN), dark/light theme, interactive typing game, and a working contact form.

## Features

- **Bilingual** — ES/EN toggle with full translation support
- **Dark/Light mode** — persisted via `localStorage`
- **Responsive** — mobile-first design, tested from 375px to 1440px
- **Sections**: Hero · About · Projects · Experience · Testimonials · Typing game · Contact
- **Contact form** — sends email via [Resend](https://resend.com), with server-side validation
- **Typing game** — measure your WPM and accuracy on real code snippets

## Tech Stack

| Area | Technology |
|------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Icons | Font Awesome 6 (CDN) |
| Email | Resend API |
| Fonts | Google Fonts (Inter + Space Grotesk) |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/vanessaucc/portfolio.git
cd portfolio
npm install
```

### Environment variables

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=re_your_api_key_here
```

To obtain a Resend API key:
1. Sign up at [resend.com](https://resend.com) (free tier: 100 emails/day)
2. Go to **API Keys** and create a new key
3. Paste it into `.env.local`

> **Without the key**: the contact form still works in development — messages are logged to the terminal console instead of being emailed.

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

## Contact Form — How It Works

The form at `/contact` sends a `POST` request to the Next.js API route `app/api/contact/route.ts`.

**Server-side validation:**
- All fields (`name`, `email`, `message`) are required
- Email is validated against a basic regex
- Message must be at least 10 characters

**Email delivery:**
- Sent via Resend SDK to `vmena7604@gmail.com`
- The sender is shown as `Portfolio Contact <onboarding@resend.dev>`
- The `replyTo` header is set to the visitor's email so you can reply directly

**Error handling:**
- `400` — validation failed (missing/invalid fields)
- `500` — Resend API error
- `200` — success; form resets and shows a confirmation banner

## Project Structure

```
app/
  api/contact/route.ts   # Contact form API endpoint
  globals.css            # CSS variables + Tailwind layers
  layout.tsx             # Root layout (fonts, ThemeProvider)
  page.tsx               # Main page (all sections composed here)
components/
  layout/
    TopNav.tsx           # Fixed top navigation bar
    SocialFloat.tsx      # Floating social links (right side)
    Footer.tsx
  sections/
    Hero.tsx
    About.tsx
    Projects.tsx
    Experience.tsx
    Testimonials.tsx
    Game.tsx             # Typing speed game
    Contact.tsx
  ui/
    SectionHeader.tsx
context/
  LangContext.tsx        # ES/EN language context
  ThemeProvider.tsx      # Dark/light mode provider
data/                    # Static data: skills, projects, experience, translations
public/
  vanessa.jpg            # Profile photo
  cv-vanessa-mena.pdf    # Downloadable CV
```

## Deployment

The project is configured for zero-config deployment on **Vercel**:

1. Push to GitHub
2. Import the repo in [vercel.com](https://vercel.com)
3. Add `RESEND_API_KEY` in **Settings → Environment Variables**
4. Deploy

## License

© 2025 Vanessa Mena. All rights reserved.
