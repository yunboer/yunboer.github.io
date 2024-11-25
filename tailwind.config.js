/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      keyframes: {
        moveRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(var(--distance, -100%))' }, // 或者指定具体像素值，如 `translateX(500px)`
        },
      },
      animation: {
        moveRight: 'moveRight 2s linear infinite', // 自定义动画名
      },
    },
  },
  plugins: [],
}

