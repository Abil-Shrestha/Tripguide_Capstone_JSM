/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '425px',
      '4k': '2560px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        DMSans: "'DM Sans', sans-serif",
        poppins: "'Poppins', sans-serif",
        Roboto: "'Roboto', sans-serif",
      },
      colors: {
        primaryGray: '#FAFAFB',
        footerGray: '#F4F5F6',
        primaryBlue: '#316BFF',
        primaryRed: '#FF543D',
        primaryPurple: '#878CFF',
        secondaryYellow: '#FFAF4E',
        secondaryTeal: '#A4CDE3',
        // gray: '#8E94A3',
        background: '#FAFBFF',
        cBlack: {
          8: '#FCFCFD',
          7: '#F4F5F6',
          6: '#E7ECF3',
          5: '#B1B5C3',
          4: '#84878B',
          3: '#3B3E44',
          2: '#222529',
          1: '#141416',
        },
        cBlue: {
          300: '#4089ff',
          500: '#0E6CFF',
        },
      },
      boxShadow: {
        'home-bookings-card': '0px 12px 60px rgba(89, 89, 89, 0.1)',
        'home-destination-card-hover': '0px 20px 52px rgba(96, 96, 96, 0.1)',
      },
      animation: {
        slideup: 'slideup 1s ease-in-out',
        slidedown: 'slidedown 1s ease-in-out',
        slideleft: 'slideleft 1s ease-in-out',
        slideright: 'slideright 1s ease-in-out',
        wave: 'wave 1.2s linear infinite',
        slowfade: 'slowfade .5s ease-in-out',
      },
      keyframes: {
        slowfade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideup: {
          from: { opacity: 0, transform: 'translateY(25%)' },
          to: { opacity: 1, transform: 'none' },
        },
        slidedown: {
          from: { opacity: 0, transform: 'translateY(-25%)' },
          to: { opacity: 1, transform: 'none' },
        },
        slideleft: {
          from: { opacity: 0, transform: 'translateX(-20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideright: {
          from: { opacity: 0, transform: 'translateX(20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
