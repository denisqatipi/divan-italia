/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#010000',
        accent: '#e0a34f',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['ST_Norilsk', 'serif'],
      },
    },
  },
}