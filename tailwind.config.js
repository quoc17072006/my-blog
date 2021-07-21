const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const mdx = require("@mdx-js/mdx");
module.exports = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.{js,mdx}", "./next.config.js"],
    transform: { mdx: mdx.sync }
  },
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: { sans: ["Inter var", ...defaultTheme.fontFamily.sans] },
      colors: {
        teal: colors.cyan, // for syntax highlighting
        fuchsia: colors.fuchsia,
        lime: colors.lime,
        sky: colors.sky,
        rose: colors.rose,
        emerald: colors.emerald
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.900")
            },
            h3: { fontWeight: "600", color: theme("colors.gray.900") },
            "ol li:before": {
              fontWeight: "600",
              color: theme("colors.gray.500")
            },
            "ul li:before": { backgroundColor: theme("colors.gray.400") },
            code: { color: theme("colors.gray.900") },
            a: { color: theme("colors.gray.900"), fontWeight: "400" },
            pre: {
              color: theme("colors.white"),
              backgroundColor: theme("colors.gray.800")
            },
            blockquote: {
              color: theme("colors.gray.900"),
              borderLeftColor: theme("colors.gray.200")
            }
          }
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.100")
            },
            h3: { fontWeight: "600", color: theme("colors.gray.100") },
            "ol li:before": {
              fontWeight: "600",
              color: theme("colors.gray.400")
            },
            "ul li:before": { backgroundColor: theme("colors.gray.400") },
            code: { backgroundColor: theme("colors.gray.800") },
            a: { fontWeight: "400", color: theme("colors.primary.500") },
            blockquote: {
              color: theme("colors.gray.100"),
              borderLeftColor: theme("colors.gray.700")
            }
          }
        }
      })
    }
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    function ({ addBase }) {
      addBase([
        {
          "@font-face": {
            fontFamily: "Inter var",
            fontWeight: "100 900",
            fontStyle: "normal",
            fontNamedInstance: "Regular",
            fontDisplay: "swap",
            src:
              'url("/fonts/Inter-roman.var-latin.woff2?3.13") format("woff2")'
          }
        },
        {
          "@font-face": {
            fontFamily: "Inter var",
            fontWeight: "100 900",
            fontStyle: "italic",
            fontNamedInstance: "Italic",
            fontDisplay: "swap",
            src:
              'url("/fonts/Inter-italic.var-latin.woff2?3.13") format("woff2")'
          }
        }
      ]);
    }
  ]
};
