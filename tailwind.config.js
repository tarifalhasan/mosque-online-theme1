/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/img/hero.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
        'pillars-of-islam': "url('/img/pillars-of-islam.png')",
        'footer-bg': "url('/img/footer.png')"
      },
      colors:{
        primary: '#1DBBB4',
        secondary: '#03716D',
        tertiary: '#004B48',
      },
  
        boxShadow:{
          '4xl':"3px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          'event-card':"0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        }
    },
  },
  plugins: [],
}
