import {Button } from '@chakra-ui/react'
import React from 'react'

function Btn({
	children, onClick, model, disabled, active
}) {
	return (
		<Button 
			onClick={onClick} 
			size={model==="accent" ? "lg" : ""}
			bgColor={model==="accent" ? "accent_color" : ""}
			_hover={{bgColor: "#4caf50"}}
			color={model==="accent" ? "text_icons" : ""}
			_active={{}}
		>
			{children}
		</Button>
	)
}

export default Btn