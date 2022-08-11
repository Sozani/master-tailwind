/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,images}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./images/illustration-intro.svg')",
        
      },
      colors: {
        'regal-blue': '#243c5a',
        'bright-red': 'hsl(12, 88%, 59%)',
        'dark-blue':' hsl(228, 39%, 23%)',
'dark-grayish-blue': 'hsl(227, 12%, 61%)',
'very-dark-blue': 'hsl(233, 12%, 13%)',
'very-pale-red':' hsl(13, 100%, 96%)',
'vary-Light-gray': 'hsl(0, 0%, 98%)'

      },
      fontFamily: {
        'sans': ['Graphik', 'sans-serif','Open Sans','Overpass','Playfair Display','Raleway','Roboto'],
        'serif': ['Merriweather', 'serif'],
      },
     
    },
  },
  plugins: [],
}
