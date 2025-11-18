import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif']
      },
      colors: {
        brand: {
          primary: '#8C2F39',
          secondary: '#F2A65A',
          accent: '#0F4C5C'
        }
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        restaurant: {
          primary: '#8C2F39',
          'primary-content': '#F8F5F0',
          secondary: '#F2A65A',
          'secondary-content': '#1F2933',
          accent: '#0F4C5C',
          'accent-content': '#F8F5F0',
          neutral: '#1F2933',
          'neutral-content': '#F8F5F0',
          'base-100': '#F8F5F0',
          'base-200': '#F1EAE0',
          'base-300': '#E6D9C8',
          'base-content': '#1F2933',
          info: '#3D7EA6',
          success: '#2D6A4F',
          warning: '#F4D35E',
          error: '#C14953'
        }
      },
      'dark'
    ]
  }
};

