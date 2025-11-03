/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3E5C76',
          dark: '#1E2A33',
        },
        secondary: {
          DEFAULT: '#A0B7C7',
        },
        accent: {
          DEFAULT: '#5FA8D3',
        },
        neutral: {
          light: '#F8FAFB',
          dark: '#1E2A33',
        },
        error: '#E57373',
      },
    },
  },
  plugins: [],
};
