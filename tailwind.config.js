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
		}
	},
	plugins: []
};
