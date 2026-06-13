import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const base = process.env.BASE_PATH ?? '/profile/';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://rahilnawab.github.io',
  base,
  integrations: [tailwind({ applyBaseStyles: false })],
  output: 'static',
});
