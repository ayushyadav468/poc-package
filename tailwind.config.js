/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		container: {
			center: true,
			width: '100%',
			padding: '0 10px',
			screens: {
				'2xl': '1188px'
			}
		},
		extend: {
			colors: {
				darkKnight: {
					100: '#E8E8EB',
					200: '#D2D1D6',
					300: '#A5A3AE',
					400: '#777585',
					500: '#59566C',
					600: '#1D1934',
					700: '#17142A',
					800: '#110F1F',
					900: '#0C0A15',
					1000: '#06050A'
				},
				trusted: {
					100: '#E8E8EB',
					200: '#E2CCF2',
					300: '#C599E5',
					400: '#A866D8',
					500: '#8B33CB',
					600: '#6E00BE',
					700: '#580098',
					800: '#420072',
					900: '#2C004C',
					1000: '#160026'
				},
				edge: {
					100: '#EAE6ED',
					200: '#D5CCDB',
					300: '#AB99B7',
					400: '#806694',
					500: '#65457C',
					600: '#2C004C',
					700: '#23003D',
					800: '#1A002E',
					900: '#12001E',
					1000: '#09000F'
				},
				grey: {
					100: '#F4F4F5',
					200: '#E7E7EA',
					300: '#D2D1D6',
					400: '#A5A3AE',
					500: '#565365',
					600: '#2B244C',
					700: '#1D1934',
					800: '#12101D',
					900: '#131120'
				},
				primary: {
					100: '#F7F2FA',
					200: '#6E00BE',
					300: '#FC5912',
					400: '#F1E6F9'
				},
				gumdropGreen: {
					600: '#228568',
					700: '#D5EDE6'
				},
				starGrass: {
					100: '#F1FBF9'
				},
				'surface-primary-pressed': '#F1E6F9',
				fontColor: {
					'content-tertiary': '#777584'
				},
				decorative: {
					boost: '#FFFAF8',
					'boost-circle': '#FFEBE3',
					'boost-circle-side': 'rgba(255,235,227,0.3)',
					'boost-title': '#8D3C1A',
					prep: 'rgba(204,239,255,0.45)',
					'prep-circle': 'rgba(0,174,255,0.10)',
					'prep-circle-side': 'rgba(0,174,255,0.05);',
					'prep-title': '#1B4A5F',
					desc: '#777584',
					learn: 'rgba(227,247,243,0.55)',
					'learn-circle': 'rgba(115,215,195,0.25)',
					'learn-circle-side': 'rgba(115,215,195,0.10)',
					'learn-title': '#18564A',
					network: 'rgba(249,209,236,0.30)',
					'network-circle': 'rgba(225,25,160,0.10)',
					'network-circle-side': 'rgba(225,25,160,0.03)',
					'network-title': '#661C4D'
				}
			},
			fontFamily: {
				inter: ['var(--font-inter)'],
				spaceGrotesk: ['var(--font-spaceGrotesk)'],
				body: ['Poppins', 'Noto Sans', 'sans-serif']
			},
			boxShadow: {
				'light-100':
					'0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)',
				'light-200': '10px 10px 20px 0px rgba(218, 213, 213, 0.10)',
				'light-300': '-10px 10px 20px 0px rgba(218, 213, 213, 0.10)',
				'dark-100': '0px 2px 10px 0px rgba(46, 52, 56, 0.10)',
				'dark-200': '2px 0px 20px 0px rgba(39, 36, 36, 0.04)',
				'user-profile':
					'0px 12px 16px -6px rgba(0, 0, 0, 0.15), 0px 4px 4px -2px rgba(0, 0, 0, 0.10)'
			},
			backgroundImage: {
				'auth-dark': "url('/assets/images/auth-dark.png')",
				'auth-light': "url('/assets/images/auth-light.png')"
			},
			screens: {
				xs: '420px'
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			customCSS: {
				'transform-transition': 'transition-transform'
			}
		}
	},
	plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')]
};
