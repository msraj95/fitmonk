/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1B120E',       // near-black roasted-coffee brown — base background
        parchment: '#F7EFE1', // warm cream — text on dark, card surfaces
        honey: '#D9A441',     // honey-drizzle gold — primary accent
        'honey-light': '#F0C572',
        date: '#6B1E23',      // deep date/fig maroon — secondary accent
        olive: '#6E7A4E',     // talbina/muesli green
        sand: '#C9A97E',      // dried-fruit tan — muted text / borders
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        drizzle: {
          '0%': { strokeDashoffset: '400' },
          '100%': { strokeDashoffset: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        drizzle: 'drizzle 1.8s ease-out forwards',
        float: 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
