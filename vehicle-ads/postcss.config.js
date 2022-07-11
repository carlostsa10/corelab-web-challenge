module.exports = {
  plugins: {
    tailwindcss: {
      extend: {
        fontFamily: {
          sans: "Inter, sans-serif",
        },
        colors: {
          blue: {
            400: "#CDF0EA",
            600: "#82E2D1",
          },
          gray: {
            900: "#E5E5E5",
          },
          red: {
            700: "#F04F4F",
          },
        },
      },
    },
    autoprefixer: {},
  },
};
