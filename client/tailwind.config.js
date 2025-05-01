/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#FAEB85",
        secondary:"#7f89f0",
        about:"#5BB4F5",
        coffee: '	#F27A51',
       
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #BC29C9, #C94D70, #D57033)',
      },
      screens: {
        'xs': {'max': '361px'}, 
        'custom':{'max':'1153px'},
        responsive: '1153px',
        order:{min:'1231px'},
        postal:{max:'1230'}
      },
    },
  },
  plugins: [],
}

