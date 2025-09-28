# FrontForumFocus (F³)

Founder-first focus and impact platform — a Next.js app that helps founders align daily work with mission and measure meaningful outcomes.

## Quick overview

- Framework: Next.js 15 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS v4 with a dark-first theme
- Animations: Framer Motion
- Forms & Validation: React Hook Form + Zod
- UI primitives: Shadcn UI + custom animated components in `components/magicui`

## What this repo contains

- `app/` — Next.js app router pages and API endpoints
- `components/` — UI and magic UI animated components
- `public/` — static assets and images
- `lib/` — small utilities

## Development

1. Copy environment example:

```bash
cp env.example .env.local
```

2. Install dependencies:

```bash
npm install
```

3. Run dev server:

```bash
npm run dev --turbopack
```

4. Build for production:

```bash
npm run build
npm run start
```

## Google Ads / Consent

This project includes a lightweight, client-side Ads consent banner (`components/ui/ads-consent.tsx`).
- The banner asks for explicit consent before loading the Google Ads script.
- Consent is stored in `localStorage` under `fff_ads_consent`.
- The banner is mounted globally via `ClientWrapper` so it appears across the site.

If you rely on GDPR/CCPA requirements in your jurisdiction, integrate a full consent management platform and keep legal guidance — this component is a simple, auditable starting point.

## Conventions & Notes

- Pages use the `"use client"` directive where interactive behavior is required.
- Reuse the `WaitlistForm` (Zod + React Hook Form) for email capture flows.
- Keep animations declarative with Framer Motion and memoize heavy components.

## Contributing

- Open an issue or PR. Keep changes small and focused.
- Follow TypeScript and linting rules. Run `npm run lint` before PRs.

## License

MIT — see the `LICENSE` file.
