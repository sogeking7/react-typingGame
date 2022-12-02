import { extendTheme } from "@chakra-ui/react";
export const MyTheme = extendTheme({
	colors: {
		white: '#f5f5f5',
		second_white: '#e4e4e4',
		night_white: '#939eae',
		black: "#161b22", //121212
		second_black: "#1a202c",
		yellow: '#FFC54D',
		teal_100: '#AEFEFF',
		teal_200: '#D82148',
		teal_300: '#000',
		teal_400: '#072227',
	},
	breakpoints: {
		basic: '1rem',
		mob1: '600px',
		mob2: '460px',
		mob3: '320px',

		md: '760px',
		fl: '1280px',
		lg: '62em',
		xl: '80em',
		'2xl'	: '96em',
	},
	fonts: {
		heading: 'Montserrat',
		body: `Monospace`
	}
})
