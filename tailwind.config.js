const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#23422d',
        spring: {
          light: '#a7f3d0',
          DEFAULT: '#6ee7b7',
          dark: '#10b981',
        },
        summer: {
          light: '#fde68a',
          DEFAULT: '#fbbf24',
          dark: '#f59e0b',
        },
        autumn: {
          light: '#fda58b',
          DEFAULT: '#f97316',
          dark: '#ea580c',
        },
        winter: {
          light: '#bfdbfe',
          DEFAULT: '#3b82f6',
          dark: '#1e40af',
        },
      },
      boxShadow: {
        hot: '0 20px 25px -5px rgba(248, 185, 78, 0.5), 0 10px 10px -5px rgba(248, 185, 78, 0.4)',
        'inner-thick-white': 'inset 0 0 0 10px white',
      },
      height: {
        'custom-80': '20rem',
        'custom-96': '24rem',
        'custom-120': '30rem',
        'custom-144': '36rem',
        'custom-screen': 'calc(100vh - 4rem)',
      },
      animation: {
        first: 'moveVertical 30s ease infinite',
        second: 'moveInCircle 20s reverse infinite',
        third: 'moveInCircle 40s linear infinite',
        fourth: 'moveHorizontal 40s ease infinite',
        fifth: 'moveInCircle 20s ease infinite',
      },
      keyframes: {
        moveHorizontal: {
          '0%': {
            transform: 'translateX(-50%) translateY(-10%)',
          },
          '50%': {
            transform: 'translateX(50%) translateY(10%)',
          },
          '100%': {
            transform: 'translateX(-50%) translateY(-10%)',
          },
        },
        moveInCircle: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '50%': {
            transform: 'rotate(180deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        moveVertical: {
          '0%': {
            transform: 'translateY(-50%)',
          },
          '50%': {
            transform: 'translateY(50%)',
          },
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({
      addUtilities,
      addComponents,
      e,
      config,
      addBase,
      theme,
    }) {
      addVariablesForColors({ addBase, theme });
    }),
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}
