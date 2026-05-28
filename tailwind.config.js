/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': {
          '50': '#f9fafb',
          '100': '#f3f4f6',
          '200': '#e5e7eb',
          '300': '#d1d5db',
          '400': '#9ca3af',
          '500': '#6b7280',
          '600': '#4b5563',
          '700': '#374151',
          '800': '#1f2937',
          '900': '#111827',
          '950': '#030712',
        },
        'emerald': {
          '400': '#34d399',
          '500': '#10b981',
          '600': '#059669',
          '700': '#047857',
        },
        'purple': {
          '400': '#c084fc',
          '500': '#a855f7',
          '600': '#9333ea',
          '700': '#7e22ce',
        },
        'luxe': {
          'emerald': '#1f7b5f',
          'purple': '#4a1d8a',
          'gold': '#d4af37',
        },
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(168, 85, 247, 0.3)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'glow-emerald': '0 0 30px rgba(16, 185, 129, 0.4)',
        'glow-purple': '0 0 30px rgba(168, 85, 247, 0.4)',
        'glow-blend': '0 0 40px rgba(16, 185, 129, 0.2), 0 0 40px rgba(168, 85, 247, 0.2)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
