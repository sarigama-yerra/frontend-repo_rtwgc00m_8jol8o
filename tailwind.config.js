/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        geist: ['Geist', 'system-ui', 'sans-serif'],
        'geist-mono': ['Geist Mono', 'monospace'],
        mona: ['Mona Sans', 'system-ui', 'sans-serif'],
        'ibm-plex': ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        manrope: ['Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        neo: {
          light: '#e6ebf1',
          dark: '#1f2430',
          tint: '#f6f9fc',
          shade: '#c9d2e1',
        }
      },
      boxShadow: {
        'neo-sm': '6px 6px 12px rgba(0,0,0,0.08), -6px -6px 12px rgba(255,255,255,0.9)',
        'neo': '10px 10px 20px rgba(0,0,0,0.12), -10px -10px 20px rgba(255,255,255,0.9)',
        'neo-inset': 'inset 6px 6px 12px rgba(0,0,0,0.08), inset -6px -6px 12px rgba(255,255,255,0.9)',
        'neo-dark': '10px 10px 20px rgba(0,0,0,0.5), -10px -10px 20px rgba(255,255,255,0.04)',
        'neo-dark-sm': '6px 6px 12px rgba(0,0,0,0.55), -6px -6px 12px rgba(255,255,255,0.05)',
        'neo-dark-inset': 'inset 6px 6px 12px rgba(0,0,0,0.55), inset -6px -6px 12px rgba(255,255,255,0.05)'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-in': 'bounceIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
