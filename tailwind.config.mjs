/** @type {import('tailwindcss').Config} */
export default {
	// darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				neue: ["Satoshi-Variable", "sans-serif"],
				neueItalic: ["Satoshi-VariableItalic", "sans-serif"],
			},
			colors: {
				// Base colors
				text: '#eef4f6',
				background: '#27304d',
				primary: '#00afff',
				accent: '#4b72fa',
				muted: 'rgba(0,0,0,0.08)',
				solidMuted: 'rgb(44,41,69)',
			},
			fontWeight: {
				thin: '100',
				extralight: '200',
				light: '300',
				normal: '400',
				medium: '500',
				semibold: '600',
				bold: '700',
				extrabold: '800',
				black: '900',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		function({ addUtilities, theme, variants }) {
			const newUtilities = {
				'.font-variable': {
					fontVariationSettings: "'wght' var(--font-weight, 400)",
				},
				'.font-variable-sm': {
					'--font-weight': '600',
				},
				'.font-variable-lg': {
					'--font-weight': '700',
				},
				'.font-variable-xl': {
					'--font-weight': '900',
				},
			};
			addUtilities(newUtilities, {
				variants: ['responsive'],
				respectPrefix: false,
			});
		}
	],
}
