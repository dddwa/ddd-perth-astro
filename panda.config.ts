import { defineConfig } from "@pandacss/dev"

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: [
        './src/**/*.{ts,tsx,js,jsx,astro}',
        './pages/**/*.{ts,tsx,js,jsx,astro}'
    ],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        breakpoints: {
            xxs: '340px',
            xs: '400px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '1.5xl': '1440px',
            '2xl': '1536px',
            '3xl': '1792px',
            '4xl': '1920px',
            '5xl': '2100px',
            '6xl': '2560px',
        },
        extend: {
            tokens: {
                colors: {
                    '2023-green': { value: '#008554' },
                    '2023-orange': { value: '#F89A1C' },
                    '2023-pink': { value: '#DA459C' },
                    '2023-gray': { value: '#58595B' },
                    '2023-red': { value: '#880007' },
                    '2023-accessible-orange': { value: '#D97F07' },
                    '2023-black': { value: '#1d1d1d' },
                    '2023-white-ii': { value: '#F5F5F5' },
                    '2023-gray-light': { value: '#C8C8C8' },
                    '2023-gray-light-ii': { value: '#EAEAEA' },
                },
                fonts: {
                    display: { value: 'Roboto Slab, sans-serif' },
                    body: { value: 'Roboto, sans-serif' },
                }
            }
        }
    },

    // The output directory for your css system
    outdir: "styled-system",


})
