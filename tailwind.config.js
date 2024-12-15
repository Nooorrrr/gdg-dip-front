/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          blue:'#4285F4',
          green:'#0D9D58',
          black:'#374151',
          gray:"#82888F",
          yellow:'#FCBC05',
        },
        secondary:{
          blue: "#286FE3",
          green:'rgba(13, 157, 88, 0.07)',
          yellow:"#F2B405"
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        kronaOne:['Krona one', 'sans-serif']
        
    },
  },
  plugins: [],
  }
}