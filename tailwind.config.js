/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primaryColor: '#2A313B',
      secondaryColor: '#18AF79',
      whiteColor: '#FFFFFF',
      blackColor: '#000000',
      darkGreyColor: '#1F2125',
      darkBlueColor: '#0832DE',
      lightGreyColor: '#F1F1F1',
      lightBlueColor: '#C5CDEE'
    },
    backgroundImage: {
      'loginBg': "linear-gradient(rgba(5, 121, 107, 0.5), rgba(5, 121, 107, 0.5)), url('/images/loginBg.jpg')",
   },
  },
  plugins: [],
}