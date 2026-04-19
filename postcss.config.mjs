const config = {
   content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#007BFF",
          dark: "#1F1F1F",
          yellow: "#F2C94C",
        },
      },
    },
  },

  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
