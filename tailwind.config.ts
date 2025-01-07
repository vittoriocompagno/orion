import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#000000",
        'accent-light': "#333333",
        'accent-dark': "#000000",
        background: "#FFFFFF",
        'surface': "#F7F7F7",
        'surface-dark': "#EEEEEE",
        'surface-light': "#FFFFFF",
        'gray-50': "#FAFAFA",
        'gray-100': "#F5F5F5",
        'gray-200': "#EEEEEE",
        'gray-700': "#333333",
        'gray-800': "#222222",
        'gray-900': "#111111",
        // Dark mode colors
        'dark-background': "#0A0A0A",
        'dark-surface': "#1A1A1A",
        'dark-accent': "#FFB800",
        'dark-text': "#E5E5E5",
      },
      fontFamily: {
        mono: ['var(--font-space-mono)', 'monospace'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'count': 'count 2s ease-out forwards',
        'rotate-in': 'rotateIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        rotateIn: {
          '0%': { transform: 'rotateX(90deg)', opacity: '0' },
          '100%': { transform: 'rotateX(0deg)', opacity: '1' },
        },
      },
      boxShadow: {
        'brutal': '4px 4px 0 0 #111111',
        'brutal-lg': '6px 6px 0 0 #111111',
        'brutal-xl': '8px 8px 0 0 #111111',
        'brutal-accent': '4px 4px 0 0 #000000',
        'brutal-white': '4px 4px 0 0 #FFFFFF',
      },
      borderRadius: {
        'brutal': '0px',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, #E5E5E5 1px, transparent 1px), linear-gradient(to bottom, #E5E5E5 1px, transparent 1px)',
        'black-gradient': 'linear-gradient(180deg, #000000, #333333)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      blur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};

export default config;
