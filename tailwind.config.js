import isBrowser from '@igorkowalczyk/is-browser';
import tailwindScrollbar from 'tailwind-scrollbar';
import plugin from "tailwindcss";
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{js,ts,jsx,tsx,html,hbs,css,scss}',
        './src/partials/components/**/*.{html,hbs}',
    ],
    safelist: [
        "bg-black"
    ],
    theme: {
        screens: {
            'min-3xl': {'min': '1681px'},
            'min-container': {'min': '1570px'},
            'min-2xl': {'min': '1441px'},
            'min-xl': {'min': '1281px'},
            'min-lg': {'min': '1025px'},
            'min-md': {'min': '769px'},
            'min-sm': {'min': '577px'},
            '3xl': {'max': '1680px'},
            'container': {'max': '1569px'},
            '2xl': {'max': '1440px'},
            'xl': {'max': '1280px'},
            'lg': {'max': '1024px'},
            'md': {'max': '768px'},
            'sm': {'max': '576px'},
        },
        colors: {
            emerald: null,
            indigo: null,
            yellow: null,
            amber: null,
            red: null,
            orange: null,
            lime: null,
            green: null,
            teal: null,
            sky: null,
            cyan: null,
            blue: null,
            violet: null,
            purple: null,
            fuchsia: null,
            pink: null,
            slate: null,
            gray: null,
            zinc: null,
            neutral: null,
            stone: null,
            rose: null,
        },
        container: {
            center: true,
            padding: 24
        },
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'white': '#ffffff',
                'black': '#000000',
                'primary': {
                    DEFAULT: '#2E4074',
                    '50': '#EEF1F8',
                    '100': '#CDD5EB',
                    '200': '#ACB9DE',
                    '300': '#8B9DD1',
                    '400': '#6A81C4',
                    '500': '#4965B6',
                    '600': '#3B5295',
                    '700': '#2E4074',
                    '800': '#212E53',
                    '900': '#141B32',
                    '950': '#070911'
                },
                'secondary': {
                    DEFAULT: '#B149E4',
                    '50': '#F6EBFC',
                    '100': '#E5C2F6',
                    '200': '#D49AF0',
                    '300': '#C272EA',
                    '400': '#B149E4',
                    '500': '#A021DE',
                    '600': '#821BB6',
                    '700': '#65158D',
                    '800': '#480F65',
                    '900': '#2B093D',
                    '950': '#0E0314'
                },
                'gray': {
                    DEFAULT: '#ADB5BD',
                    '50': '#F8F9FA',
                    '100': '#E9ECEF',
                    '200': '#DEE2E6',
                    '300': '#CED4DA',
                    '400': '#ADB5BD',
                    '500': '#6C757D',
                    '600': '#495057',
                    '700': '#343A40',
                    '800': '#212529',
                    '900': '#1B1D20',
                    '950': '#121314'
                }
            },
            fontFamily: {
                sans : ['Figtree', 'sans-serif']
            },
            container: {
                center: true,
                padding: "24px",
            },
            aspectRatio: {
                none: 'unset',
                auto: 'auto',
                square: '1 / 1',
                '16/9': '16 / 9',
                '16/10': '16 / 10',
                '5/4': '5 / 4',
            },
            spacing: {
                // Fraction Sizes
                0.75: '0.1875rem',
                4.5: '1.125rem',
                5.5: '1.375rem',
                6.5: '1.625rem',
                7.5: '1.875rem',
                8.5: '2.125rem',
                9.5: '2.375rem',
                13: '3.25rem',
                15: '3.75rem',
                17: '4.375rem',
                18: '4.5rem',
                22: '5.625rem',
                30: '7.5rem',
                54: '13.5rem',
            },
            fontSize: (theme) => ({ ...theme('spacing') }),
            borderRadius: (theme) => ({ ...theme('spacing') }),
            borderWidth: (theme) => ({ ...theme('spacing') }),
            opacity: generateOpacityRange(1, 100),
            zIndex: generateZIndexRange(1, 100),
            transitionDuration: generateTransitionDurationRange(100, 1000),
            transitionDelay: generateDelayRange(100, 1000),
            keyframes: {
                gradient: {
                    'from': { backgroundPosition: '0 50%' },
                    'to': { backgroundPosition: '200% 50%'},
                },
                shadowPulse: {
                    from: { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.2)"},
                    "70%": { boxShadow: "0 0 0 10px rgba(37, 211, 102, 0)"},
                    to: { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)"}
                }
            },
            animation: {
                'gradient': 'gradient 8s ease infinite',
                "shadowPulse": "shadowPulse 2s infinite",
            },
        },
    },
    plugins: [
        isBrowser,
        tailwindScrollbar({ preferredStrategy: 'pseudoelements', nocompatible: true }),
        plugin(function({ addUtilities }) {
            addUtilities({
                /* Additional Classes */
                '.font-heavy': { 'font-weight': '1000' },
                '.text-fill-transparent': { '-webkit-text-fill-color': 'transparent', },
                '.transform-fill': { 'transform-box': 'fill-box', },
                '.transform-flat': { 'transform-style': 'flat', },
                '.transform-3d': { 'transform-style': 'preserve-3d', },
                '.backface-hidden': { 'backface-visibility': 'hidden', },
                '.backface-visible': { 'backface-visibility': 'visible', },
                '.writing-vertical-rl': { 'writing-mode': 'vertical-rl', },
                '.text-orientation-mixed': { 'text-orientation': 'mixed', },
                /* Custom Classes */
                '.overflow-fix': { 'mask-image': '-webkit-radial-gradient(white,_black)' },
                '.full-cover': { 'width': '100%', 'height': '100%', 'object-fit': 'cover', 'object-position': 'center', 'display': 'block', },
                '.full-contain': { 'width': '100%', 'height': '100%', 'object-fit': 'contain', 'object-position': 'center', 'display': 'block', },
                '.fixed-full': { 'position': 'fixed', 'top': '0', 'left': '0', 'width': '100%', 'height': '100%', },
                '.absolute-full': { 'position': 'absolute', 'top': '0', 'left': '0', 'width': '100%', 'height': '100%', },
                '.absolute-center': { 'position': 'absolute', 'top': '50%', 'left': '50%', 'transform': 'translate(-50%, -50%)', },
                '.flex-center': { 'display': 'flex', 'justify-content': 'center', 'align-items': 'center', },
                '.before-full:before': { 'content': '""', 'position': 'absolute', 'top': '0', 'left': '0', 'width': '100%', 'height': '100%', },
                '.after-full:after': { 'content': '""', 'position': 'absolute', 'top': '0', 'left': '0', 'width': '100%', 'height': '100%', },
                '.line-clamp': { 'overflow': 'hidden', 'text-overflow': 'ellipsis', 'white-space': 'nowrap', 'max-width': '100%', },
            })
        })
    ],
}

// Generate Opacities
function generateOpacityRange(start, end) {
    const opacityRange = {};
    for (let i = start; i <= end; i++) {
        opacityRange[i] = (i / 100).toString();
    }
    return opacityRange;
}

// Generate z-indexes
function generateZIndexRange(start, end) {
    const zIndexRange = {};
    for (let i = start; i <= end; i++) {
        zIndexRange[i] = i.toString();
    }
    return zIndexRange;
}

// Generate Transition Durations
function generateTransitionDurationRange(start, end) {
    const transitionDurationRange = {};
    for (let i = start; i <= end; i+=50) {
        transitionDurationRange[i] = (i + "ms").toString();
    }
    return transitionDurationRange;
}

// Generate Transition Delays
function generateDelayRange(start, end) {
    const delayRange = {};
    for (let i = start; i <= end; i+=50) {
        delayRange[i] = (i + "ms").toString();
    }
    return delayRange;
}