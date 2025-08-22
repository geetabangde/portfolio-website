import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // keyframes
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0, 0) scale(1)",
          },
          "33%": {
            transform: "translate(-25%, -25%) scale(1.1)",
          },
          "66%": {
            transform: "translate(0, 0) scale(0.8)",
          },
          "100%": {
            transform: "translate(0, 0) scale(1)",
          },
        },
        Animation: {
          blob: {
            "0%": {
              transform: "translate(0, 0) scale(1)",
            },
            "33%": {
              transform: "translate(-25%, -25%) scale(1.1)",
            },
            "66%": {
              transform: "translate(0, 0) scale(0.8)",
            },
            "100%": {
              transform: "translate(0, 0) scale(1)",
            },
          },
        },
      },
    },
    plugins: [],
  },
});


