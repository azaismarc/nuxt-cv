import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        fontFamily: {
            'sans': ['Lato']
        },
        extend: {
            colors: {
                'blue': '#00BFFF',
                'dark-blue': '#1C3244',
                'red': '#B22222',
                'gray': '#A9A9A9',
            },
        }
    }
}