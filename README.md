# Subhav Batra — Portfolio

Personal portfolio site for [subhavbatra.me](https://subhavbatra.me).

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- Framer Motion
- Deployed via GitHub Actions → GitHub Pages

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Updating content

Edit files in `src/data/`:

- `site.ts` — name, email, socials, bio, stats
- `experience.ts` — work history
- `projects.ts` — project cards
- `skills.ts` — skill categories
- `education.ts` — degrees
- `leadership.ts` — community involvement

## Assets

Drop files into `public/`:

- `public/resume.pdf` — CV download (`resumeAvailable: true` in `site.ts`)
- `public/images/profile.png` — headshot in About section (`profileImage` in `site.ts`)
- `public/images/projects/*.png` — project screenshots

## Deploy

Push to `main`. GitHub Actions builds and deploys automatically.

Ensure repo **Settings → Pages → Source** is set to **GitHub Actions**.
