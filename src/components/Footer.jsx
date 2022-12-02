import { Box, Container,useColorModeValue, Button, Icon, Flex, Text} from '@chakra-ui/react'
import React from 'react'


import {IconMail, IconBrandGithub} from '@tabler/icons'
import DarkModeSwitcher from './Buttons/DarkModeSwitcher'
function Footer() {
  const dmColor = useColorModeValue("black", "white");
	return (
		<Box w='100%' p='2rem' fontSize='12px'>
			<Container maxW='800px' display='flex' justifyContent='space-between' >
				<Flex gap='1rem'>
					<Button variant='link' fontSize='12px' fontWeight='thin' gap='.2rem' color={dmColor}>
						<Icon><IconMail/></Icon>
						Contact
					</Button>
					<Button variant='link' fontSize='12px' fontWeight='thin' gap='.2rem' color={dmColor}>
						<Icon><IconBrandGithub /></Icon>
						Github
					</Button>
				</Flex>
				<Flex>
					<DarkModeSwitcher />
				</Flex>
			</Container>
		</Box>
	)
}

export default Footer