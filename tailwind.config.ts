import { withUt } from "uploadthing/tw";
 
export default withUt({
  // Your existing Tailwind config
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      accent: "#0989FF",
      topHeadingPrimary: "#010f1c",
      topHeadingSecondary: "#021d35",
      pink: "#fd4b6b",
    },
  },
  plugins: [],
});
