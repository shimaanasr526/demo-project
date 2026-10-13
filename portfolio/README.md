# Shaimaa Nasr — Portfolio

Next.js App Router, Tailwind CSS 4, Framer Motion, and Lucide React. The portfolio is in the `portfolio/` subdirectory. The original site remains at the repository root.

## Run

Validated with Node.js 24.19.0 and npm 11.9.0.

```sh
cd /workspace/demo-project/portfolio
npm ci --no-audit --no-fund
npm run dev
```

For production: `npm run build`, then `npm start`. Default port: 3000. To choose another: `npm run dev -- --port 3001` or `npm start -- --port 3001`.

## Content

Edit `lib/content.js` for project data, services, process steps, verified social URLs and approved testimonials. The carousel appears once genuine testimonials are supplied as `{ quote, name, role }` objects. LinkedIn/Facebook are disabled until their URLs are provided. Arabic is a disabled UI placeholder, not a translation toggle.

No headshot was supplied; the profile uses a typographic monogram. Case-study artwork is original typography, not client assets. Metrics come from the user’s brief; verify attribution and periods before public release. The original Lovable page returned HTTP 403, so its unpublished changes and content could not be retrieved.

## Contact behavior

The validated form prepares a `mailto:` draft in the visitor’s configured email application. It does not send messages directly and never claims successful delivery. A real API or service with server-side validation and rate limiting is needed to send messages within the website. No secrets are needed for the current workflow.

## Accessibility and motion

Reduced-motion preference is honored, the marquee stops under reduced motion, counters have stable accessible values, dialogs use native focus trapping and Escape handling, and navigation/forms support keyboard input. Animations use transforms and opacity; fonts are system fonts to avoid external font loading.

## Structure

- `app/layout.jsx`: metadata and root document
- `app/page.jsx`: page composition
- `app/globals.css`: Tailwind entry, editorial styling, responsive layouts
- `components/`: independent interactive sections
- `lib/content.js`: editable data

For Vercel: import `shimaanasr526/demo-project`, select the `shaimaa-portfolio` branch, set Root Directory to `portfolio`, and use the detected Next.js defaults. Do not deploy the repository root: it contains the original unrelated site. No Vercel deployment has been made by this setup.
