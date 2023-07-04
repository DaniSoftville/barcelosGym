/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      "gray-20": "#F8F4EB",
      "gray-50": "#EFE6E6",
      "gray-100": "#DFCCCC",
      "gray-500": "#5E0000",
      "primary-100": "#97B4B3",
      "primary-300": "#CDA81B",
      "primary-500": "#9A91C6",
      "secondary-400": "#FFCD5B",
      "secondary-500": "#FFC132",
    },
    backgroundImage: (theme) => ({
      "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
      "mobile-home": "url('./assets/homePageGraphic.svg')",
    }),
    fontFamily: {
      dmsans: ["DM Sans", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    content: {
      barcelostext: "url('./assets/barcelostext.svg')",
      abstractwaves: "url('./assets/abstractwaves.svg')",
      abstractwaves2: "url('./assets/abstractwaves2.svg')",
      shapes: "url('./assets/abstractShape.png')",
      circles: "url('./assets/circles.svg')",
      sparkles: "url('./assets/sparkles.svg')",
      sparklers1: "url('./assets/sparklers1.svg')",
      forms: "url('./assets/forms.svg')",
    },
  },
  screens: {
    xs: "480px",
    sm: "768px",
    md: "1060px",
  },
};
export const plugins = [];
