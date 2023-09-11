/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				xs: '480px',
				// => @media (min-width: 480px) { ... }

				sm: '640px',
				// => @media (min-width: 640px) { ... }

				md: '768px',
				// => @media (min-width: 768px) { ... }

				lg: '992px',
				// => @media (min-width: 1024px) { ... }

				xl: '1140px',
				// => @media (min-width: 1280px) { ... }

				'2xl': '1210px',
				// => @media (min-width: 1536px) { ... }

				'3xl': '1390px'
			}
		},
		fontFamily: {
			'work-sans': ['Work Sans Variable', 'sans-serif']
		},
		fontSize: {
			base: 'var(--base-text)',
			md: 'var(--md)',
			lg: 'var(--lg)',
			xl: 'var(--xl)',
			'2xl': 'var(--xl2)'
		},
		lineHeight: {
			lg: 'var(--llh)',
			sm: 'var(--slh)'
		},
		colors: {
			gray: {
				50: 'rgb(var(--gray-50) / 1)',
				100: 'rgb(var(--gray-100) / 1)',
				200: 'rgb(var(--gray-200) / 1)',
				300: 'rgb(var(--gray-300) / 1)',
				500: 'rgb(var(--gray-500) / 1)',
				600: 'rgb(var(--gray-600) / 1)',
				700: 'rgb(var(--gray-700) / 1)',
				900: 'rgb(var(--gray-900) / 1)'
			},
			primary: 'rgb(var(--primary-color) / 1)',
			dark: 'rgb(var(--dark-color) / 1)'
		}
	},
	plugins: []
};
