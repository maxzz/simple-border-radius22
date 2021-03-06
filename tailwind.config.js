const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                'ui-check': `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e")`,
                'ui-radio': `url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='3'/%3E%3C/svg%3E")`,
            }),
            colors: {
                primary: colors.slate,
                accent: {
                    bg: '#ff9393',          // dark background
                    text: '#fff',           // text color
                    textBg: '#fff',         // color color on dark background
                    border: '#a66d6d42',    // stroke / border
                },
                accentVar: {
                    bg: 'var(--tm-accent-bg)',
                    text: 'var(--tm-accent-text)',
                    textBg: 'var(--tm-accent-textBg)',
                    border: 'var(--tm-accent-border)',
                },
                ui: {
                    // bg: colors.slate[200],
                    // bg: '#f8e6e6',
                    bg: colors.red[100],
                    text: '#5a3543',
                }
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('./tailwind/tailwnid-plugin-debug-styles'),
        require('./tailwind/tailwind-plugin-debug-screens'),
        require('@tailwindcss/forms')({ strategy: 'class' }),
        require('./tailwind/tailwind-plugin-colors-bridge')([
            { prefix: '--tm-', groupName: 'primary' },
            { prefix: '--tm-', groupName: 'accent', groupNameOut: 'accent' },
            { prefix: '--tm-', groupName: 'yellow', groupNameOut: 'yellow' },
            { prefix: '--tm-', groupName: 'ui', groupNameOut: 'ui' },
        ]),
    ],
};
