/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3b82f6', // blue-500
          dark: '#60a5fa', // blue-400
        },
        secondary: {
          light: '#6b7280', // gray-500
          dark: '#9ca3af', // gray-400
        },
        background: {
          light: '#ffffff',
          dark: '#1a202c',
        },
        text: {
          light: '#1f2937', // gray-800
          dark: '#f7fafc', // gray-100
        }
      }
    },
  },
  plugins: [],
}
