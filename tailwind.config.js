/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#db180b'
      },
      inset: {
        '25p': '33%',
        '75p': '66%',
        '100p': '100%',
      },
      width: {
        'max-content': 'max-content',
      },
    },
  },
  plugins: [],
}

