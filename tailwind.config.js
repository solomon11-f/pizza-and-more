/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B6B',
          dark: '#FF4949',
          light: '#FFB5B5',
        },
        secondary: {
          DEFAULT: '#2D2D2D',
          light: '#4A4A4A',
        },
        accent: '#FFA94D',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
} 