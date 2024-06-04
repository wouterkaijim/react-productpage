/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  purge: [
    './public/**/*.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      xxs: "300px",
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "4xl": "2560px",
      msm: { max: "640px" },
      mmd: { max: "768px" },
      mlg: { max: "1024px" },
      mxl: { max: "1280px" },
      m2xl: { max: "1536px" },
    },
    extend: {
      spacing: {
        'main': '5.625rem',
      },
      dropShadow: {
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
    colors: {
      transparent: 'transparent',
      'main': '#101415',
      'alt': '#030508',
      'title': '#eee',
      'text': '#aaa',
      'button': '#B31918',
    },
  },
  plugins: [],
}