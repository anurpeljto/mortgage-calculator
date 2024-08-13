/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "whitesmoke": "hsl(0, 0%, 100%)",
        "slate_100": "hsl(202, 86%, 94%)",
        "slate_300": "hsl(203, 41%, 72%)",
        "slate_500": "hsl(200, 26%, 54%)",
        "slate_700": "hsl(200, 24%, 40%)",
        "slate_900": "hsl(202, 55%, 16%)",
        "lime": "hsl(61, 70%, 52%)",
        "redcustom": "hsl(4, 69%, 50%)",
      },
      fontFamily: {
        custom: ['PlusJakartaSans', 'sans-serif']
      },
      
      fontWeight: {
        semibold: 500,
        bold: 700
      },
    },
  },
  plugins: [
  ],
}

