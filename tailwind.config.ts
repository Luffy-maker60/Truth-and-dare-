import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        blush: {
          50:  '#fff0f3',
          100: '#ffe0e8',
          200: '#ffc5d5',
          300: '#ff96b0',
          400: '#ff5c84',
          500: '#ff2660',
          600: '#f0063f',
          700: '#cb0034',
          800: '#a8012e',
          900: '#8c052c',
        },
        velvet: {
          50:  '#f4f0ff',
          100: '#ebe4ff',
          200: '#d9ccff',
          300: '#bfa3ff',
          400: '#a070ff',
          500: '#8040ff',
          600: '#7020f5',
          700: '#5f12d8',
          800: '#4f10b3',
          900: '#420e92',
        },
        midnight: {
          900: '#0d0b1a',
          800: '#13102a',
          700: '#1c1840',
          600: '#241f54',
        },
      },
      backgroundImage: {
        'love-gradient': 'linear-gradient(135deg, #ff2660 0%, #8040ff 50%, #ff2660 100%)',
        'dark-gradient': 'linear-gradient(135deg, #13102a 0%, #1c1840 50%, #13102a 100%)',
        'card-glow': 'radial-gradient(ellipse at top, rgba(255,38,96,0.15) 0%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'glow-pink': '0 0 30px rgba(255, 38, 96, 0.3)',
        'glow-purple': '0 0 30px rgba(128, 64, 255, 0.3)',
        'card': '0 4px 24px rgba(0,0,0,0.12)',
        'card-dark': '0 4px 24px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
export default config
