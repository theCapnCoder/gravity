module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      padding: {
        mobile: "24px",
        desktop: "120px",
      },
    },
    fontFamily: {
      sans: ["SF Pro Display", "sans-serif"],
    },
    extend: {
      screens: {
        mobile: "320px",
        desktop: "1440px",
      },
      colors: {
        "midnight-slate": "#303031",
        "forest-shadow": "#22322F",
      },
      backgroundImage: {
        city: "url('/src/img/city.jpg')",
      },
    },
  },
  plugins: [],
};
