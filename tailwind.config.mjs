/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#0f1419',
          raised: '#1a2332',
          border: '#2a3544',
        },
        accent: {
          DEFAULT: '#3b82f6',
          hover: '#2563eb',
          muted: '#1e3a5f',
        },
      },
    },
  },
  plugins: [],
};
