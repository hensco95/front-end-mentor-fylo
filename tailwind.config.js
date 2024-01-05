/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.html"],
  theme: {
    theme: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
    },
    extend: {
      colors: {
        error: "hsl(0, 100%, 63%)",
        emailBackground: "hsl(217, 28%, 15%)",
        mainBackground: "hsl(218, 28%, 13%)",
        footerBackground: "hsl(216, 53%, 9%)",
        testimonialsBackground: "hsl(219, 30%, 18%)",
        gradient1: "hsl(176, 68%, 64%)",
        gradient2: "hsl(198, 60%, 50%)",
        White: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
      },
      backgroundImage: () => ({
        "curvy-desktop": "url('../images/bg-curvy-desktop.svg')",
        "curvy-mobile": "url('../images/bg-curvy-mobile.svg')",
      }),
    },
  },
  plugins: [],
};
