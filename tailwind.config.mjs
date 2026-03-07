/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Use CSS variables for dynamic theme switching
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        accent: {
          gold: 'var(--accent-gold)',
          blue: 'var(--accent-blue)',
        },
        'blog-card': {
          bg: 'var(--blog-card-bg)',
          title: 'var(--card-title-color)',
        },
        tag: {
          border: 'var(--tag-border)',
          'bg-active': 'var(--tag-bg-active)',
          'text-active': 'var(--tag-text-active)',
          'bg-inactive': 'var(--tag-bg-inactive)',
          'text-inactive': 'var(--tag-text-inactive)',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
