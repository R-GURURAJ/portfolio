/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
    animation: {
      wiggle: 'wiggle 1s ease-in-out infinite',
    }
  },
  plugins: [require("daisyui"),
  require('tailwind-scrollbar-hide'),
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0A2647",
          "secondary": "#144272",
          "accent": "#205295",
          "neutral": "#2C74B3",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
      "night"
    ],
  },
}


