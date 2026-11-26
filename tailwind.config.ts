import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Identidade visual Duck Tech
        preto: '#0D0D0D',
        grafite: '#151515',
        'cinza-escuro': '#202020',
        'cinza-medio': '#929292',
        branco: '#FFFFFF',
        'yellow-duck': '#F5C518',
        oliva: '#9C9672',
        vermelho: '#D91A2A',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(180deg, #0D0D0D 0%, #151515 100%)',
        'gradient-yellow': 'linear-gradient(135deg, #F5C518 0%, #e0b013 100%)',
        'gradient-glow': 'radial-gradient(circle at 50% 30%, rgba(245, 197, 24, 0.14), transparent 60%)',
      },
      boxShadow: {
        'glow-yellow': '0 0 50px rgba(245, 197, 24, 0.18)',
        'glow-red': '0 0 40px rgba(217, 26, 42, 0.18)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
    },
  },
  plugins: [],
} satisfies Config
