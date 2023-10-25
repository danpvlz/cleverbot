/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      borderRadius:{
        '4xl':'30px'
      },
      boxShadow:{
        "box-theme-green":'0px 12px 20px 0px #7ebf7342',
        "box-theme-purple":'0px 12px 20px 0px #e9cbeb',
        "prompt-shadow":'box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;'
      },
      colors:{
        pink: '#e9cbeb',
        "white-pinkish": '#fffdff',
        "white-pinkish-dark": '#f5e9f6',
        "theme-purple-light": "#f1eaf2",
        "theme-purple": "#774fe9",
        "theme-purple-dark":'#2b1e50',
        "theme-green":"#7ebf73",
        "theme-green-dark":"#61a756",
      }
    },
  },
  plugins: [],
}

