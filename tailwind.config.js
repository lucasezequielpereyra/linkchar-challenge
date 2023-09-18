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
        videoBackground: 'rgba(82, 82, 82, 0.4)',
        transparentData: 'rgba(255, 255, 255, 0.7)'
      }
    }
  },
  plugins: []
}
