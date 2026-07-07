/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1E2761',
          light: '#2E3A82',
          dark: '#141B49',
        },
        ice: {
          DEFAULT: '#CADCFC',
          light: '#E4EDFC',
          dark: '#A8C3F0',
        },
        accent: {
          DEFAULT: '#16A34A',
          light: '#DCFCE7',
          dark: '#0F7A37',
        },
      },
      fontFamily: {
        sans: ['Segoe UI', 'ui-sans-serif', 'system-ui', 'Helvetica', 'Arial', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(6px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out',
      },
    },
  },
  plugins: [],
}
