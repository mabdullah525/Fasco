/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
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
      },
      fontFamily: {
        'Volk': ['Volkhov'],
        'Poppins': ['Poppins'],
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
      },
    },
  },
  plugins: [],
}



