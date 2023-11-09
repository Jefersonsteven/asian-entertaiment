import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary': {
        500: '#FF4163',
        600: '#FF133E',
        700: '#9D0A25',
      },
      'secondary': {
        500: '#0B011D',
        600: '#080014',
        700: '#030009',
      },
      'success': {
        500: '#55E564',
        600: '#47BE52',
        700: '#308538',
      },
      'warning': {
        500: '#FFB800',
        600: '#FFA200',
        700: '#FF8B00',
      },
      'danger': {
        500: '#FF103B',
        600: '#CC0025',
        700: '#730418',
      },
      'gray': {
        500: '#B5B5B5',
        600: '#7D7D7D',
        700: '#333333',
      },
      'white': '#FFFFFF',
      'black': '#000000',
    }
  },
  plugins: [],

}
export default config
