# Studio 7 Production Website

Website for Studio 7 Production, a videography and photography company serving Malaysia and Singapore.

## Stack

- Next.js
- Tailwind CSS
- Sanity CMS
- Cloudflare Pages, planned
- Resend, planned

## Cloudflare Pages

Recommended build settings:

- Framework preset: Next.js
- Build command: `npm install && npm run build`
- Build output directory: `out`
- Node version: `22`

## CMS Readiness

The website can run without Sanity credentials by using local fallback content. Once a
Sanity project is created, add the values from `.env.example` and manage content at
`/studio`.

CMS content types:

- Site settings
- Services
- Portfolio projects
- Testimonials
