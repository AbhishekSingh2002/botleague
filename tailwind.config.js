/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary brand accents sampled from the Figma export
        brand: {
          red: '#FF4D4D', // primary CTA red
          redHover: '#F23B3B',
          gold: '#FDC705', // category icons + highlight border
          blue: '#2A1AE0', // user-journey rings / connectors
        },
        // Neutral surfaces (dark theme)
        ink: {
          black: '#000000',
          900: '#0D0D0D',
          850: '#141414',
          800: '#191919',
          surface: '#1C1C1C',
          card: '#1F1F1F',
          700: '#262626',
          border: '#2E2E2E',
        },
        muted: {
          DEFAULT: '#8E8E8E',
          soft: '#A3A3A3',
          dim: '#6B6B6B',
        },
      },
      fontFamily: {
        // Wide techno display face (closest open match to the Figma headline font)
        display: ['Michroma', 'ui-sans-serif', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        shell: '1440px',
      },
      keyframes: {
        livePulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
      },
      animation: {
        livePulse: 'livePulse 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
