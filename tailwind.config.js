// /** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme')

// module.exports = {
//   content: [
//     "./node_modules/flowbite-react/**/*.js",
//     "./node_modules/flowbite/**/*.js",
//     './src/**/*.html', './node_modules/flowbite/**/*.js',
//     "./pages/**/*.{ts,tsx}",
//     "./public/**/*.html",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['Inter var', ...defaultTheme.fontFamily.sans],
//       },
//     },
//   },
//   plugins: [
//     require("flowbite/plugin")
//   ],
// }
/** @type {import('@types/tailwindcss/tailwind-config').Config} */ 
module.exports = {
  content: [
    './index.html',
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",
    './src/**/*.html', './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {},
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'icon-library.com', 'realestatebuketwebdev.s3.ap-northeast-3.amazonaws.com'], //Domain of image host
  },
  plugins: [require("flowbite/plugin")],
}
