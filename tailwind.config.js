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
      },
      colors:{
        primary: '#1DBBB4',
        secondary: '#03716D',
        tertiary: '#004B48',
      },
   
      
    },
  },
  plugins: [],
}
