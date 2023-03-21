/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'heroShadow': '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
        'inviteShadow': '0px 1px 2px rgba(16, 24, 40, 0.05)',
        'cardShadow': '2px 4px 4px rgba(0, 0, 0, 0.25)',
        'cardShadowMobile': '0.984621px 1.96924px 1.96924px rgba(0, 0, 0, 0.25)',
        'headerShadow': '0px 4px 4px rgba(13, 20, 46, 0.25)'
      },
    },
  },
  plugins: [],
}
