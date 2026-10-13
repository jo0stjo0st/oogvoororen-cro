# Oogvoororen CRO Lab

Next.js-testomgeving voor het nabouwen en optimaliseren van Oogvoororen.be, met App Router, TypeScript en Tailwind CSS.

## Lokaal starten

Gebruik Node.js 22 of 24 LTS.

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Controles en productie

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Structuur

- `src/app`: pagina’s, layouts en globale stijlen (App Router).
- `src/components`: gedeelde UI-componenten.
- `src/features/experiments`: CRO-experimenten en variantcomponenten per onderwerp.
- `public`: statische afbeeldingen en andere assets.

Nieuwe pagina: `src/app/hoortoestellen/page.tsx` → `/hoortoestellen`.
CRO-variant: `src/app/varianten/homepage/a/page.tsx` → `/varianten/homepage/a`.
Gebruik gedeelde componenten voor consistente UI tussen varianten.

## Vercel

Framework: Next.js. Root Directory: repository-root. Install: `npm ci`. Build: `npm run build`. Output Directory: standaardwaarde van Next.js.
Pushes naar `main` starten via de bestaande GitHub-koppeling een nieuwe deployment.
Er zijn geen omgevingsvariabelen nodig voor deze startversie.

De metadata vraagt zoekmachines deze testomgeving niet te indexeren. Dit is geen toegangsbeveiliging.
