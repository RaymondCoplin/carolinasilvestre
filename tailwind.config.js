/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#625e57",
        background: "#F5F1EA",
        accent: "#A8895C",
        surface: "#F5F1EA",
        "on-surface": "#0A0A0A",
        "outline-variant": "rgba(10,10,10,0.1)"
      },
      spacing: {
        "stack-sm": "0.5rem",
        "stack-lg": "3rem",
        "page-margin-x": "5vw",
        "section-gap": "12rem",
        gutter: "2rem",
        "stack-md": "1.5rem",
        "page-margin-y": "4rem"
      },
      fontFamily: {
        "headline-lg": ["Playfair Display"],
        "headline-sm": ["Playfair Display"],
        "headline-md": ["Playfair Display"],
        "body-lg": ["Manrope"],
        "body-md": ["Manrope"],
        "label-caps": ["Manrope"],
        "display-hero": ["Playfair Display"]
      },
      fontSize: {
        "headline-lg": ["4.5rem", { lineHeight: "1.1", fontWeight: "400" }],
        "headline-sm": ["1.5rem", { lineHeight: "1.4", fontWeight: "500" }],
        "headline-md": ["3rem", { lineHeight: "1.2", fontWeight: "400" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6", fontWeight: "300" }],
        "body-md": ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        "label-caps": ["0.75rem", { lineHeight: "1.0", letterSpacing: "0.15em", fontWeight: "600" }],
        "display-hero": ["clamp(4rem, 12vw, 11rem)", { lineHeight: "0.9", letterSpacing: "-0.03em", fontWeight: "400" }]
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries")
  ]
}
