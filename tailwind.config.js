/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
import animations from '@midudev/tailwind-animations'

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
   
},
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
   animations,
  ],
};
