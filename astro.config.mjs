// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://praxis-dr-kellner.vercel.app',
  vite: { plugins: [tailwindcss()] },
});
