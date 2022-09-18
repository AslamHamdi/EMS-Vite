const colors = require('tailwindcss/colors')

module.exports = {
  //mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    placeholderColor: theme => theme('colors'),
    extend: {
      colors: {
        amber: colors.amber,
        emerald: colors.emerald,
        slate: colors.slate,
        teal: colors.teal,
        conic: colors.conic,
        sky: colors.sky,
        cyan: colors.cyan,
      }
    },
  },
  plugins: [
  ],
  variants: {
    extend: {
        display: ["group-hover"],
    },
},
}

// npx tailwindcss-cli build -i ./ClientApp/src/css/Shared/init_tailwind.css -o ./ClientApp/src/css/Shared/layoutTailwind.css -w
