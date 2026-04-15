import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.ts',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#a68ade',
          200: '#3d2860',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9448db',
          700: '#7c3aed',
          800: '#6d28d9',
          900: '#8c42fb',
        },
        surface: {
          DEFAULT: 'var(--surface)',
          card:    'var(--surface-card)',
          dark:    'var(--surface-dark)',
          darker:  'var(--surface-darker)',
          darkest: 'var(--surface-darkest)',
          mid:     'var(--surface-mid)',
        },
        ink: {
          primary:   'var(--ink-primary)',
          secondary: 'var(--ink-secondary)',
          muted:     'var(--ink-muted)',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
      borderRadius: { card: '16px' },
      boxShadow: {
        card:      '0 4px 20px rgba(124,58,237,0.1)',
        glow:      '0 8px 32px rgba(124,58,237,0.15)',
        'glow-lg': '0 8px 25px rgba(192,132,252,0.4)',
        'glow-sm': '0 4px 15px rgba(192,132,252,0.4)',
      },
      keyframes: {
        'spin-slow':    { from: { transform: 'rotate(0deg)' },   to: { transform: 'rotate(360deg)' } },
        'spin-reverse': { from: { transform: 'rotate(360deg)' }, to: { transform: 'rotate(0deg)' } },
        float:          { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        'grow-bar':     { from: { width: '0' }, to: { width: 'var(--target)' } },
        blink:          { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        'heart-pulse':  { '0%,100%': { transform: 'scale(1)' }, '50%': { transform: 'scale(1.3)' } },
      },
      animation: {
        'spin-slow':         'spin-slow 15s linear infinite',
        'spin-slow-reverse': 'spin-reverse 25s linear infinite',
        float:               'float 4s ease-in-out infinite',
        'float-1':           'float 4s ease-in-out 1.5s infinite',
        'float-2':           'float 4s ease-in-out 0.8s infinite',
        'grow-bar':          'grow-bar 1.2s ease-out forwards',
        blink:               'blink 1s step-end infinite',
        'heart-pulse':       'heart-pulse 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
