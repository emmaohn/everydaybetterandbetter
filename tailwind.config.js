/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-200': '005A7F',
        'navy-100': '1885B1',
        'navy-50': '7ABAD3',
        'gold-200': 'E5C078',
        'gold-100': 'DAC398',
        'gold-50': 'F1EFE7',
      }, 
    },
  },
  plugins: [],
}

