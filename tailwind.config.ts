// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     container: {
//       center: true,
//       padding: {
//         DEFAULT: "1rem",
//         md: "2rem",
//         lg: "4rem",
//       },
//     },
//     fontFamily: {
//       sans: ["Poppins", "sans-serif"],
//     },
//     screens: {
//       sm: "375px",
//       md: "768px",
//       lg: "1200px",
//     },
//   },
//   plugins: [],
// };
// export default config;


import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "4rem",
      },
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1200px",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      spacing: {
        'mobile-header': '4rem',
        'mobile-content': '1.5rem',
      },
      maxWidth: {
        'mobile': '100%',
        'tablet': '640px',
      }
    }
  },
  plugins: [],
};

export default config;