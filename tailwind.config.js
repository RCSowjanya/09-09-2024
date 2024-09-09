/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 6px 15px -8px rgba(0, 0, 0, 0.3)', // Adjust rgba value for transparency
      },  
     
 
    },
  },
  plugins: [],
};
