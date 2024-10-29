/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts}", // Incluye archivos TS y HTML
    "./projects/**/*.{html,js,ts}" // Incluye archivos de tu carpeta "projects"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

