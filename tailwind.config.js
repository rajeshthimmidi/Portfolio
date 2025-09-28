/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // React files
    "./public/index.html"         // optional, for CRA
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(70,86,151,0.7)' },
          '50%': { boxShadow: '0 0 32px 8px rgba(70,86,151,0.7)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
