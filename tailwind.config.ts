import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#4CEEF8',
        'secondary': '#1F2428',
        'tertiary': '#23282C',
        'color1': '#E3DFD6',
        'color2': '#0F0F0F',
      },
      boxShadow: {
        'shadowButton' : '0px 0px 10px 3px rgba(76, 238, 248, 0.2)',
      },
      inset: {
        'special': 'calc(50vw - 640px)',
      },
      padding: {
        'book': 'calc(50vh - 300px - 5rem)',
      },
      height: {
        'min-navbar': 'calc(100vh - 5rem)',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'infinite-scroll-reverse': 'infinite-scroll-reverse 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'infinite-scroll-reverse': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0%)' },
        },
      }  
    },
  },
  plugins: [],
}
export default config