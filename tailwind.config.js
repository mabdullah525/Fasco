/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    container: {
      center: true,
      padding: '5rem',
    },
    extend: {
      backgroundImage: {
        // Define a custom linear gradient
        'custom-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)',
      },
      boxShadow: {
        'custom': '0px 20px 52.29px rgba(68, 68, 68, 0.04)', // Add custom shadow here
        'tab': '0px 20px 35px 0px rgba(0, 0, 0, 0.15)', 
        'card': '0px 40px 90px 0px rgba(0, 0, 0, 0.06)', 
        'color': '0px 0px 0px 1px rgba(0, 0, 0, 0.1)', 
      },
      fontFamily: {
        'Volk': ['Volkhov'],
        'Poppins': ['Poppins'],
        'digital-number': ['Digital Numbers'],
      },
      colors: {
        'hero-bg': '#E0E0E0',
        'primary': '#484848',
        'tabs-bg': '#FAFAFA',
        'tabs': '#8A8A8A',
        'star': '#FCA120',
        'sold': '#FF4646',
        'slider': '#B6B6B6',
        'peaky-bg': '#F8F8F8',
        'peaky': '#DADADA',
        'women-gray': '#767676',
        'footer-border': '#DEDFE1',
        'google-border': '#5B86E5',
        'signin-or': '#838383',
        'input': '#9D9D9D',
        'lines-bar': '#F2F2F2',
        'sold-out': '#B1B1B1',
        'pagination': '#F3F3F3',
        'fasco': '#666666',
        'save': '#DA3F3F',
        'cut-word': '#666666',
        'hurry-up': '#FDEFEE',
        'circle-red': '#FF0606',
        'hurry': '#FF706B',
        'bar': '#EF2D2D',
        'input-bg': '#F5F5F5',
        'bar-bg': '#DEDEDE',
        'bg-overlay': 'rgba(120, 120, 120, 0.41)',
        'check-border': 'rgba(0, 0, 0, 0.39)',
      },
      screens: {
        'xs': '320px',
        'sm-xs':'481px',  
      },
      padding: {
        'xs-1': '10px',  // Add padding-x of 1rem for xs screen size
        'md-2': '20px',  // Add padding-x of 2rem for
        'xs-3': '25px',  // Add padding-x of 2rem for
        'xs-4': '30px',  // Add padding-x of 2rem for
      }
    },
  },
  plugins: [],
}



