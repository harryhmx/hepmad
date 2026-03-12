import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://hepmad.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },
});
