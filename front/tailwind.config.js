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
        brand: {
          DEFAULT: '#0D47A1', // A deep, trustworthy blue
          light: '#1976D2',
          dark: '#0A3882',
        },
        primary: {
          light: '#3b82f6', // blue-500
          dark: '#60a5fa', // blue-400
          ...{
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
            950: '#172554',
          },
        },
        secondary: {
          light: '#f9fafb', // gray-50
          dark: '#1f2937', // gray-800
        },
        background: {
          light: '#ffffff',
          dark: '#111827', // A slightly darker gray
        },
        text: {
          light: '#1f2937', // gray-800
          dark: '#f9fafb', // gray-50
        },
        success: '#10b981', // green-500
        warning: '#f59e0b', // amber-500
        error: '#ef4444', // red-500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'], // for Arabic
      },
    },
  },
  plugins: [],
}
