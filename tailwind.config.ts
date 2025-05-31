import type { Config } from 'tailwindcss'

const config: Config = {
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
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-playfair-display)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

export default config 