# Rapolu Eswara Balu — Portfolio

A single-page personal portfolio showcasing five shipped products, capabilities,
research focus, and skills. Dark editorial design with an animated hero, film
grain, cursor glow, a skills marquee, and scroll-reveal motion.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind v4 · Framer Motion.
Fully static — deploys free on Vercel with no environment variables.

**Live demo:** _add Vercel URL_

---

## Featured work (all live)

| Project | Domain | Live |
| --- | --- | --- |
| Scout | Agentic AI | https://deep-research-agent-silk.vercel.app/ |
| Cite | LLM · RAG | https://chat-with-doc-omega.vercel.app/ |
| Slotly | Full-stack SaaS | https://booking-saas-phi.vercel.app/ |
| VERAINE | UI/UX · E-commerce | https://fashion-web-three.vercel.app/ |
| Ember & Oak | UI/UX · Restaurant | https://reserve-a-table-sigma.vercel.app/ |

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static production build
```

## Deploy (Vercel)

Push to GitHub, import the repo on Vercel, and deploy — no env vars, no config.
Then add the live URL above. Point a custom domain at it when you're ready.

## Make it yours

All content lives in one file: [`src/lib/data.ts`](src/lib/data.ts). Edit there to
update anything without touching components:

- **Profile** — role, location, tagline, bio, email, GitHub.
- **Projects** — name, description, tech, links, per-project gradient identity.
- **Capabilities / Research / Skills** — the section lists.

Nice-to-add later (optional): a real photo (replace the `REB` monogram in
[`src/components/sections/about.tsx`](src/components/sections/about.tsx)), a
LinkedIn link, and a downloadable résumé link in the header/contact section.

---

_Designed &amp; built by Rapolu Eswara Balu._
