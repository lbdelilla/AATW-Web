/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'at-blue': '#1c2e5f',
        'at-red': '#ff6f61',
        'at-dark-blue': '#1f356f',
        'at-dark-red': '#ff4c4c',
      },
    },
    screens: {
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [flowbitePlugin],
}
