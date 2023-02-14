// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */

const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
    './layouts/**/*.tsx',
    './lib/**/*.ts',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'sans'],
        serif: ['Noto Serif KR', 'serif'],
      },
      colors: {
        primary: colors.pink,
        primaryVariant: {
          light: '#EC407A',
          DEFAULT: '#C97D7D',
          dark: '#C97D7D',
        },
        secondary: {
          light: '#03DAC6',
          DEFAULT: '#03DAC6',
          dark: '#03DAC6',
        },
        backsheet: {
          light: '#FFFFFF',
          DEFAULT: '#2A2A2A',
          dark: '#2A2A2A',
        },
        background: {
          light: '#FFFFFF',
          DEFAULT: '#121212',
          dark: '#121212',
        },
        surface: {
          light: '#FFFFFF',
          DEFAULT: '#121212',
          dark: '#121212',
        },
        onBackground: {
          light: '#121212',
          DEFAULT: '#FFFFFF',
          dark: '#FFFFFF',
        },
        onSurface: {
          light: '#BDBDBD',
          DEFAULT: '#FFFFFF',
          dark: '#FFFFFF',
        },
        error: {
          light: '#B00020',
          DEFAULT: '#CF6679',
          dark: '#CF6679',
        },
        //@ts-ignore
        gray: colors.neutral, // TODO: Remove ts-ignore after tw types gets updated to v3
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontFamily: 'Noto Serif KR, serif',
            color: theme('colors.gray.900'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')} !important`,
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontFamily: 'Noto Sans KR, sans',
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h2: {
              fontFamily: 'Noto Sans KR, sans',
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h3: {
              fontFamily: 'Noto Sans KR, sans',
              fontWeight: '600',
              color: theme('colors.gray.900'),
            },
            'h4,h5,h6': {
              fontFamily: 'Noto Sans KR, sans',
              color: theme('colors.gray.900'),
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
            },
            code: {
              color: theme('colors.gray.700'),
              backgroundColor: theme('colors.gray.200'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
              fontWeight: '500',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            details: {
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.500'),
            },
            strong: { color: theme('colors.gray.900') },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
            },
          },
        },
        dark: {
          fontFamily: 'Noto Serif KR, serif',
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')} !important`,
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontFamily: 'Noto Sans KR, sans',
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h2: {
              fontFamily: 'Noto Sans KR, sans',
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h3: {
              fontFamily: 'Noto Sans KR, sans',
              fontWeight: '600',
              color: theme('colors.gray.100'),
            },
            'h4,h5,h6': {
              fontFamily: 'Noto Sans KR, sans',
              color: theme('colors.gray.100'),
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
            },
            code: {
              color: theme('colors.gray.100'),
              backgroundColor: theme('colors.gray.700'),
            },
            details: {
              backgroundColor: theme('colors.gray.800'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.400'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.400'),
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              th: {
                color: theme('colors.gray.100'),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
