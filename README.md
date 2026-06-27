# Krishan Arpidani — Portfolio

A personal portfolio for **Krishan Arpidani**, Package Reliability Operation Engineer at Micron, building software, data, and ML/AI tools.

Single-page, scroll-driven, dark-tech minimal. Built from scratch with Next.js.

**Live:** [krishan-portfolio-tau.vercel.app](https://krishan-portfolio-tau.vercel.app)

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** with a custom dark design system
- **Framer Motion** for scroll-reveal motion
- **Geist** (Sans + Mono) typography
- **Phosphor Icons**
- **Nodemailer** for the contact form

## Sections

A single page composed of anchored sections:

- **Hero** — intro, role, primary CTAs
- **About** — narrative + key facts + at-a-glance stats
- **Experience** — work timeline + education
- **Skills** — grouped toolkit with honest comfort levels
- **Work** — selected projects with live/source links
- **Contact** — direct channels + working contact form

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Contact form (optional)

The contact form uses Nodemailer over Gmail. Set these environment variables (locally in `.env.local`, or in your Vercel project settings):

```
CONTACT_EMAIL=your@gmail.com
CONTACT_EMAIL_APP_PASSWORD=your_gmail_app_password
CONTACT_TO=where_to_receive@example.com
```

Without these, the form UI still renders and validates, but sending will fail gracefully.

## Editing Content

All content lives in [`lib/data.js`](lib/data.js) — profile, stats, experience, education, skills, and projects. Edit there to update the site; no component changes needed.

## Deployment

Deployed on [Vercel](https://vercel.com). Push to the connected branch to deploy.

---

Designed and built by Krishan Arpidani.
