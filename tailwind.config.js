/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primaryLogo: '#B7066F',
        secondaryLogo: '#FC6667',
        background: '#17171b',
        videoBackground: 'rgba(219, 219, 219, 0.6)'
      }
    }
  },
  plugins: []
}
