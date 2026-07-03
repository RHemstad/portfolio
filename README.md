# Rebecca L. Hemstad — Portfolio

Personal portfolio site: design work, writing, and speaking. Built with React + Vite.

## Live site

Deployed on Netlify: **https://rhemstad.netlify.app/**

Netlify auto-deploys from the `main` branch on every push (build command `npm run build`, publish directory `dist`). If a push doesn't show up on the live site, check the **Deploys** tab in Netlify — builds may be paused there.

## Local development

```bash
npm install
npm run dev
```

This starts the Vite dev server (default: http://localhost:5173) with hot reload.

## Other scripts

```bash
npm run build     # production build -> dist/
npm run preview   # serve the production build locally, for a final check before pushing
npm run lint      # run ESLint
```

## Stack

- React 18 + React Router
- Vite
- Framer Motion (animations)
- lucide-react (icons)
