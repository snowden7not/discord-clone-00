/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],

  theme: {
    screens: {
      'usm': '349px', //ultra small 349
      'one': '473px',
      'two': '993px',

      'ulg': '1110px', //ultra large

      //'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },

  plugins: [],
  
  fontFamily:{
    whitney:["whitney"],
    Ginto:["Ginto"],
    ggsans:["ggsnas"],
  },
}

