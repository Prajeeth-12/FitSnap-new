import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
        teal: '#14B8A6',
        white: '#FFFFFF',
        dark: '#0B1020'
      },
      backgroundImage: theme => ({
        'teal-blue-gradient': 'linear-gradient(135deg, #14B8A6 0%, #1E3A8A 100%)'
      })
    },
    fontFamily: {
      inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      poppins: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif']
    }
  },
  plugins: [],
} satisfies Config
