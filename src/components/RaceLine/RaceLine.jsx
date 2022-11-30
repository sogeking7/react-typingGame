import { Box, Container } from '@chakra-ui/react'
import React from 'react'
function RaceLine({minutes, seconds}) {
	return (
		<Box mb='1rem'>
			<Container maxW='800px' px='1.5rem' fontSize='1.2rem'>

			<span>{minutes}</span>:<span>{seconds}</span>
			</Container>
		</Box>
	)
}

export default RaceLine