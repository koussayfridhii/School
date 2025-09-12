/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#9333ea',
        accent: '#f59e0b',
        neutral: colors.gray,
        background: {
          light: '#f9fafb', // gray-50
          dark: '#111827',  // gray-900
        },
        text: {
          light: '#1f2937', // gray-800
          dark: '#f9fafb',  // gray-50
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
