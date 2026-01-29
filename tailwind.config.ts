import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        'emergence-indigo': '#1a1f3c',

        // Secondary
        'threshold-violet': '#2d2a4a',
        'phosphor-teal': '#4ecdc4',
        'sacred-amber': '#d4a574',

        // Backgrounds
        'void-core': '#0d0f1a',
        'nebula-layer': '#151829',
        'stratosphere': '#1e2235',

        // Text
        'celestial': '#e8e6f0',
        'dust-light': '#9a98a9',
        'fade': '#6b6880',

        // Semantic
        'ei-success': '#4ecdc4',
        'ei-warning': '#d4a574',
        'ei-error': '#c75d5d',
        'ei-info': '#7b8cde',

        // Stratum colors (for memory layer visualization)
        stratum: {
          values: '#c4a7e7',
          beliefs: '#9ccfd8',
          goals: '#f6c177',
          episodes: '#eb6f92',
          playbooks: '#31748f',
          notes: '#908caa',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        body: ['var(--font-spectral)', 'serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'stratum-shift': 'stratum-shift 20s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '1' },
        },
        'stratum-shift': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-10px) scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
