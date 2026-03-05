/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Late Night Flight - Dark Theme
        bg: {
          primary: '#0F1117',   // Main background - near black with blue tint
          secondary: '#1A1D27', // Card/section backgrounds
          tertiary: '#2A2E3D',  // Dividers
        },
        text: {
          primary: '#E8E6E1',   // Main text - off-white
          secondary: '#8B8FA8', // Secondary text - gray-blue
          muted: '#6B7280',     // Muted text
        },
        accent: {
          gold: '#C9A84C',      // Accent - warm gold
          blue: '#5B8FD4',      // Links/CTA - soft blue
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
