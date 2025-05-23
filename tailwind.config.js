// tailwind.config.js

const { headers } = require('next/headers');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      "./app/**/*.{js,ts,jsx,tsx.css}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
            inter: ["Inter"],
            base: ['var(--font-base)', 'sans-serif'],
            mono: ['var(--font-geist-mono)', 'monospace'],
          },
        // colors: {
        //     header: "#A59F9F",
        //     "header-gray": "#D9D9D9",
        //     "header-text": "#DC143C",

        //     body: "#A59F9F",
        //     "body-gray": "#D9D9D9",
        //     "body-text": "#DC143C",

        //     footer: "#A59F9F",
        //     "footer-gray": "#D9D9D9",
        //     "footer-text": "#DC143C",

        //   },
        },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
    corePlugins: {
      preflight: true, // 可选：启用预设样式
    },
  }
  