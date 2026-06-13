# Rahil Nawab — Profile

Personal portfolio site for recruiters, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed to GitHub Pages.

**Live site:** [rahilnawab.github.io/profile](https://rahilnawab.github.io/profile)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:4321/profile/](http://localhost:4321/profile/) (base path mirrors production).

## Build

```bash
npm run build
npm run preview
```

## Deployment

Pushes to `main` trigger the GitHub Actions workflow in `.github/workflows/deploy.yml`.

In your repo **Settings → Pages**, set **Source** to **GitHub Actions**.

### Configuration

If your GitHub username or repo name differs, update:

- `astro.config.mjs` — default `site` and `base` values
- `.github/workflows/deploy.yml` — `BASE_PATH` and `SITE_URL` env vars

For a user site (`username.github.io` repo), set `base` to `'/'`.

## Content

Edit these files to update your profile:

| File | Purpose |
|------|---------|
| `src/data/profile.ts` | Name, title, about text, skills |
| `src/data/experience.ts` | Work history |
| `src/data/certifications.ts` | Certifications |

Place PDF assets (resume, certificates) in the `public/` folder.

## Certifications & resume PDFs

Add these files to `public/`:

- `Rahil_Nawab.pdf`
- `GCP_ACE.pdf`
- `CKA.pdf`
- `HashiCorp_Certified_Terraform.pdf`
- `AWS_Certified_Solutions_Architect.pdf`
- `AWS_CCP.pdf`
