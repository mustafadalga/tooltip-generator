module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                '3xl': '1680px',
            },
            keyframes: {
              'copied': {
                'from': {
                  bottom: '-100%',
                },
                'to': {
                  bottom: '100%'
                },
              },
            },
            animation: {
                'copied': 'copied 0.5s ease-out',
            }
        },
    },
    plugins: [],
}