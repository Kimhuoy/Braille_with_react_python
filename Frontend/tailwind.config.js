/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BlueDark: "#15274b",
        WhiteDark: "#F5F7F8",
        MainSucess: "#198754",
      },
      fontFamily: {
        KohSantepheap: ["Koh Santepheap", "serif"],
      },
      fontSize: {
        big: "14px",
        mid: '12px',
        sm: "10px",
        pi: "8px",
      },
    },
  },
  plugins: [],
};
