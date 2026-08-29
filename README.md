# PNC Student Team Portfolio — Final Frontend MVP

A complete frontend-only team portfolio built from the supplied PNC MVP design standard, member CVs, portrait photos and technology intro video.

## Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Material UI (MUI)
- Framer Motion
- MUI Icons
- React Icons / Simple Icons
- Local structured TypeScript data
- No database / no backend required

## Main pages

- `/` — Home + full-screen technology intro video
- `/about` — Mission, vision, values and team journey
- `/team` — Filterable 7-member directory
- `/team/[slug]` — Individual profile, skills, education, experience, projects, contact and CV actions
- `/expertise` — Team capabilities and visual technology logo system
- `/projects` — Filterable curated case studies
- `/projects/[slug]` — Detailed case study view
- `/contact` — Validated frontend contact form using `mailto:`
- Custom 404 page
- `sitemap.xml` and `robots.txt`

## Run locally

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Production test

```bash
npm run typecheck
npm run build
npm start
```

## Intro animation

The supplied MP4 is stored at:

```text
public/media/tech-intro.mp4
```

It plays full-screen when the Home page mounts. Visitors can skip it immediately. The overlay also includes a progress indicator and startup-status copy.

## CV files

Original supplied CV PDFs are stored under `public/cv/` and linked from member profiles.

Important: the source archive file named `Kin Doung-CV.pdf` contains Leader Din's CV content. To avoid serving the wrong CV, it is used for Leader Din. Kin Doung's profile intentionally has no CV download until a correct dedicated CV is supplied.

## Editing team content

Update:

```text
data/team.ts
```

For team-level case studies, update:

```text
data/projects.ts
```

For expertise areas, update:

```text
data/expertise.ts
```

## Design standard

The original supplied MVP design document is preserved in:

```text
docs/PNC_MVP_Design_Standard.docx
```

The implementation follows the requested no-gradient, solid-color Material UI design direction.
