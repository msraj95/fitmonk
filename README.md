# FitMonk

A demo storefront for **FitMonk** — raw honey, dry fruits, muesli, talbina, dates
and Omani barfi. Built as a fast, static, no-backend site you can host for free
and drop into a portfolio/GitHub repo.

> This is a **demo/marketing site**, not a live store. There's no cart, no
> payments, and no database — "Order" links out to Instagram DM / WhatsApp.
> Swap in real copy, photos, and reviews from
> [@heyfitmonk](https://instagram.com/heyfitmonk) before treating it as final.

## Stack

- **React 18 + TypeScript** — [Vite](https://vitejs.dev) for the dev server/build
- **Tailwind CSS** — utility styling, custom design tokens in `tailwind.config.js`
- No backend, no database, no third-party JS beyond Google Fonts — keeps the
  attack surface small for a static demo

## Security measures included

Because this is meant to go in a public repo and be deployed live, it ships
with sensible defaults rather than nothing:

- **HTTP security headers** at the hosting layer (`vercel.json` for Vercel,
  `public/_headers` for Netlify): `Content-Security-Policy`,
  `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`,
  `Referrer-Policy`, `Permissions-Policy`, and HSTS.
- A matching `<meta>` CSP in `index.html` as defense-in-depth for any context
  where custom response headers aren't available.
- **No secrets in the client bundle.** `.env.example` documents the only
  config the app reads (`VITE_*` vars), and everything in it is
  non-sensitive by design — Vite inlines `VITE_`-prefixed vars into the
  bundle, so nothing secret should ever go there. Real `.env` files are
  git-ignored.
- **External links** (`Instagram`, `WhatsApp`) use `rel="noopener noreferrer"`
  to prevent `window.opener` tab-nabbing.
- **Lint rules** (`eslint.config.js`) block `eval`, `new Function`, and
  `javascript:` URLs.
- **CI** (`.github/workflows/ci.yml`) runs lint, type-check, build, and
  `npm audit --audit-level=high` on every push/PR.
- **Dependabot** (`.github/dependabot.yml`) opens weekly PRs for dependency
  and GitHub Actions updates.
- Sourcemaps are disabled in the production build (`vite.config.ts`) so
  the deployed bundle doesn't ship original source.

None of this makes a static marketing site "hacker-proof" — there isn't much
attack surface to begin with — but it's the same baseline you'd want before
any project goes public.

> **Note on versions:** `package.json` pins reasonably current major versions
> (React 19, Vite 6, Tailwind 3) as of this writing, but was put together
> without live access to the npm registry. Run `npm install` then
> `npm outdated` once to confirm you're on the latest patch/minor releases,
> and check npmjs.com if you want to jump to a newer major (e.g. Tailwind 4).

## Getting started

Requires Node.js 20+.

```bash
npm install
cp .env.example .env   # then edit values if you want
npm run dev
```

Visit the printed local URL (typically `http://localhost:5173`).

### Other scripts

```bash
npm run build       # production build → dist/
npm run preview     # preview the production build locally
npm run lint         # ESLint
npm run typecheck   # tsc --noEmit
```

## Configuration

All config is public, non-secret, and read from environment variables (see
`.env.example`):

| Variable                | Purpose                                  |
| ------------------------ | ----------------------------------------- |
| `VITE_INSTAGRAM_HANDLE`  | Instagram handle used in nav/footer/CTA links |
| `VITE_WHATSAPP_NUMBER`   | WhatsApp number (with country code, digits only) for the "Message on WhatsApp" button |
| `VITE_CONTACT_EMAIL`     | Contact email, reserved for future use    |

## Deploying

### Vercel (recommended)

1. Push this repo to GitHub.
2. [Import the repo on Vercel](https://vercel.com/new) — it auto-detects Vite.
3. Add the `VITE_*` env vars from `.env.example` under Project Settings →
   Environment Variables.
4. Deploy. `vercel.json` already configures the security headers.

### Netlify

1. Push this repo to GitHub.
2. [New site from Git](https://app.netlify.com/start) on Netlify.
3. Build command `npm run build`, publish directory `dist` (already set in
   `netlify.toml`).
4. Add the same env vars in Site settings → Environment variables.

### GitHub Pages

GitHub Pages doesn't support custom response headers, so you'd rely on the
`<meta>` CSP only. Build with a base path matching your repo name:

```bash
npm run build -- --base=/your-repo-name/
```

Then publish the `dist/` folder (e.g. via the `gh-pages` branch or GitHub
Actions `actions/deploy-pages`).

## Project structure

```
src/
  components/     UI sections (Hero, Products, OrderCTA, ...)
  data/products.ts  Product copy — edit this to change what's for sale
  App.tsx         Page assembly
  index.css       Tailwind + design tokens
public/
  _headers        Netlify security headers
  favicon.svg
vercel.json       Vercel security headers
netlify.toml      Netlify build + redirect config
.github/          CI workflow + Dependabot config
```

## Before you launch this for real

- [ ] Replace placeholder product descriptions/prices in `src/data/products.ts`
- [ ] Replace placeholder testimonials in `src/components/Testimonials.tsx`
- [ ] Set real `VITE_INSTAGRAM_HANDLE` / `VITE_WHATSAPP_NUMBER`
- [ ] Add real product photography (currently the design uses no photos —
      swap the `Seal` glyphs for `<img>`s if you add them, and remember to
      add the image host to the CSP `img-src`)
- [ ] Update the OG/meta description in `index.html`

## License

MIT — see `LICENSE`.
