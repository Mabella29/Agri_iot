import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    darkMode: 'class',
    theme: {
      screens: {
        xxs: '320px',
        xs: '375px',
        xsm: '425px',
        '3xl': '1920px',
        ...defaultTheme.screens
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px'
        }
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}

export default config
