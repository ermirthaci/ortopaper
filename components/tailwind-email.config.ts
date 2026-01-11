import type { Config } from "tailwindcss";

const tailwindEmailConfig: Config = {
  theme: {
    extend: {
      fontFamily: {
        airbnb: ["Helvetica", "Arial", "sans-serif"],
      },
    },
  },
};

export default tailwindEmailConfig;
