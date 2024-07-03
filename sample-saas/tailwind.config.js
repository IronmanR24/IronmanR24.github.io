/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "user-1": "green",
        "user-2": "pink",
        "user-3": "red",
      },
    },
  },
  plugins: [],
};
