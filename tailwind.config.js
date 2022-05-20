module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bg_draw: {
          from:{
            width: '0%'
          },
          to: {
            width: '100%'
          }
        },
        glitch_in: {
          '0%': {
            opacity:'0%',
            left: '100px',
          },
          "70%": {
            opacity:'0%',
            left: '-800px'
          },
          "75%": {
            opacity:'100%',
            left: '-800px'
          },
          "79%": {
            opacity: '100%',
            left: '-800px'
          },
          "91%": {
            opacity:'0%',
            left: '-800px'
          },
          "95%": {
            opacity:'100%',
            left: '-800px'
          },
          '100%': {
            opacity:'100%',
            left: '-800px'
          }
        },
        glitch_in_mobile: {
          '0%': {
            opacity:'0%',
          },
          "70%": {
            opacity:'0%',
            left: '-50px'
          },
          "75%": {
            opacity:'100%',
            left: '-50px'
          },
          "79%": {
            opacity: '100%',
            left: '-50px'
          },
          "91%": {
            opacity:'0%',
            left: '-50px'
          },
          "95%": {
            opacity:'100%',
            left: '-50px'
          },
          '100%': {
            opacity:'100%',
            left: '-50px'
          }
        },
        slide_in_slow: {
          '0%': {
            opacity:'0%',
            left: '100px'
          },
          '100%': {
            opacity:'100%',
            left: '-600px'
          }
        },
        slide_in_slow_mobile: {
          '0%': {
            opacity:'0%',
            left: '100px'
          },
          '100%': {
            opacity:'100%',
            left: '-20px'
          }
        },
        zoom: {
          '0%': {
          transform: 'scale(1.0)'
        },
        '50%': {
        transform: 'scale(1.1)'
      }
        }
      },
      animation: {
        zoom: 'zoom 1s ease-in-out forwards',
        slide: 'glitch_in 1s ease-in-out forwards',
        slide_mobile: 'glitch_in_mobile 1s ease-in-out forwards',
        slide_slow: 'slide_in_slow 1s ease-in-out forwards',
        slide_slow_mobile: 'slide_in_slow_mobile 1s ease-in-out forwards',
        bg_draw: 'bg_draw 1s ease-in-out forwards'
      },
      colors: {
        'dp-light':'#2E2F32',
        'dp-dark': '#243c5a',
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
