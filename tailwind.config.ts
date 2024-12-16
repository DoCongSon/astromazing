import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 15s linear infinite',
        fade: 'fade .3s linear',
        'price-color': 'price-color 1s linear',
      },
      keyframes: {
        marquee: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-50%)' },
        },
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'price-color': {
          '0%': {
            background: 'linear-gradient(90deg, #E9940B 0%, #FFDBA3 100%)',
          },
          '100%': {
            background: 'linear-gradient(90deg, #102841 0%, #1359A1 100%)',
          },
        },
      },
      boxShadow: {
        tag: '-6px 2px 32px 0px rgba(0, 0, 0, 0.06), 2px 4px 20px 0px rgba(0, 0, 0, 0.02)',
        'product-card': '-3px 2px 20px 0px rgba(0, 0, 0, 0.04), 2px 2px 12px 0px rgba(0, 0, 0, 0.02)',
        'icon-social': '2.25px 2.25px 3.375px 0px rgba(0, 0, 0, 0.18) inset',
        'footer-item': '11px 6px 24px 0px rgba(0, 0, 0, 0.04)',
        'cash-item': '0px 1.356px 21.695px 0px rgba(0, 0, 0, 0.04), 7.458px 4.068px 16.271px 0px rgba(0, 0, 0, 0.04)',
        'button-add-to-cart':
          '6px 5px 3px 0px rgba(3, 30, 59, 0.02) inset, 3px 4px 3px 0px rgba(22, 53, 86, 0.29) inset',
      },
      dropShadow: {
        'product-card': '-3px 2px 20px 0px rgba(0, 0, 0, 0.04), 2px 2px 12px 0px rgba(0, 0, 0, 0.02)',
      },
      colors: {
        'bg-elevation': {
          5: '#FFFFFF',
          10: '#FAFAFA',
          20: '#F8F8F8',
          30: '#F0F0F0',
        },
        'gray-scale': {
          0: '#FFFFFF',
          20: '#A9A9A9',
          30: '#828282',
          40: '#6A6A6A',
          50: '#454545',
          60: '#3F3F3F',
          80: '#262626',
        },
        'black/tints': {
          900: '#1A1A1A',
        },
        brown: {
          50: '#F9F4F0',
          500: '#BE9367',
          700: '#876849',
        },
        blue: {
          50: '#EBF0F7',
          400: '#45617D',
          500: '#204265',
          600: '#153454',
          700: '#102841',
          800: '#0D1F33',
        },
        mint: '#29CC97',
      },
    },
  },
  plugins: [],
} satisfies Config
