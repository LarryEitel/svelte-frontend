/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			keyframes: {
				// Dropdown menu
				'scale-in': {
					'0%': { opacity: 0, transform: 'scale(0)' },
					'100%': { opacity: 1, transform: 'scale(1)' }
				},
				'slide-down': {
					'0%': { opacity: 0, transform: 'translateY(-10px)' },
					'100%': { opacity: 1, transform: 'translateY(0)' }
				},
				'slide-up': {
					'0%': { opacity: 0, transform: 'translateY(10px)' },
					'100%': { opacity: 1, transform: 'translateY(0)' }
				}
			},
			animation: {
				// Dropdown menu
				'scale-in': 'scale-in 150ms ease-in-out',
				'slide-down': 'slide-down 250ms cubic-bezier(0.16, 1, 0.3, 1)',
				'slide-up': 'slide-up 250ms cubic-bezier(0.16, 1, 0.3, 1)'
			}
		}
	},
	darkMode: ['class', '[data-theme="night"]'],
	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui'),
		// require("tailwindcss-radix")(),
		require('@tailwindcss/line-clamp')
	],
	daisyui: {
		themes: [
			'winter',
			{
				night: {
					...require('daisyui/src/colors/themes')['[data-theme=night]'],
					'base-100': '#121e36',
					'base-200': '#0d1729',
					'base-300': '#060a12'
				}
			}
		],
		darkTheme: 'night'
	}
};
