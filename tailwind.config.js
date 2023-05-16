/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/views/**/*.html',
        './src/js/**/*.js',
        './index.html',
    ],
    theme: {
        extend: {
            screens: {
                sm: {'max': '576px'},
                md: {'max': '768px'},
                lg: {'max': '1024px'},
                xl: {'max': '1280px'},
                xxl: {'max': '1440px'},
            },

            colors: {
                primary: '#137ff2',
                dark: '#091929',
                light: '#dcdfe3',
                text: '#545557',
                white: '#FFFFFF',
                black: '#000000',
            },

            zIndex: {
                1: '1',
                2: '2',
                3: '3',
                4: '4',
            },

            flexGrow: {
                1: '1',
            },
        },
    },
    plugins: [
        require('@tailwindcss/container-queries'),
        require('prettier-plugin-tailwindcss'),
    ],
};

