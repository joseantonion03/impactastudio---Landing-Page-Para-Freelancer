/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'img_bg_body': "url('/image/bg2.png')",
      'img_bg_hero': "url('/image/hero/bg.png')",
      'img_bg_hero_mobile': "url('/image/hero/bg-mobile.png')",
      'img_bg_hero_full': "url('/image/hero/bg-full.png')",
      'img_bg_processolp': "url('/image/processolp/rocket.webp')",
      'img_bg_trafego_item1': "url('/image/trafego/item1.svg')",
      'img_bg_trafego_item2': "url('/image/trafego/item2.svg')",
      'img_bg_trafego_item3': "url('/image/trafego/item3.svg')",
      'img_bg_informativo': "url('/image/informativo/bg1.svg')",
      'img_bg_informativo_full': "url('/image/informativo/bg-full.svg')",
      'img_bg_sobremim': "url('/image/sobremim/bg.png')",
      'img_bg_sobremim_mobile': "url('/image/sobremim/bg-mobile.png')",
      'img_bg_sobremim_aprov': "url('/image/sobremim/aprov.svg')",
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      screens:{
        "screen2000": "2000px",
        "screen900": "900px",
        "screen500": "500px",
        "screen450": "450px"
      },
      colors: {
        "impacta-orange-primary": "#F76100",
        "impacta-orange-clear": "#f761001a"
      }
    },
  },
  plugins: [],
}

