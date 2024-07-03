/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "user-1": "#1a202c",
        "user-2": "#48bb78",
        "user-3": "#f6e05e",
      },
      textColor: {
        "user-1": "grey",
        "user-2": "black",
        "user-3": "black",
      },
    },
  },
  plugins: [],
};
