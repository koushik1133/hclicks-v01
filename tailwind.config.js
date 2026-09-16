/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        noir: {
          950: "#060606",
          900: "#0a0a0a",
          850: "#111111",
          800: "#171717",
          700: "#242424",
          600: "#383838",
        },
        accent: {
          blue: "#2997FF",
          indigo: "#5E5CE6",
          silver: "#E5E5EA",
          gray: "#86868B",
          dark: "#1C1C1E",
        },
        cream: {
          50: "#FFFFFF",
          100: "#F5F5F7",
          200: "#E5E5EA",
          300: "#D1D1D6",
          400: "#A1A1A6",
        }
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Playfair Display", "Cinzel", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "Inter", "sans-serif"],
        editorial: ["var(--font-cinzel)", "var(--font-cormorant)", "serif"],
      },
      letterSpacing: {
        widestx: "0.25em",
        cinema: "0.35em",
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
