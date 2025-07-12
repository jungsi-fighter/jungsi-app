module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{css}",
  ],
  theme: {
    extend: {
      colors: {
        'fire-dark':  '#2a0000',
        'fire-base':  '#e63946',
        'fire-light': '#ff6b6b',
      },
      boxShadow: {
        'glow-red': '0 0 20px rgba(230,57,70,0.5), 0 0 40px rgba(230,57,70,0.3)',
      },
    },
  },
  plugins: [],
}