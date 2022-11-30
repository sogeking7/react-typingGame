import { Box, Image, Container, Flex } from "@chakra-ui/react";
import carImg from "./../../img/car.svg";

import React from "react";
function RaceLine({ minutes, seconds, colorMode, index, car, setCar}) {
  return (
    <Box mb="1rem" h="40px">
      <Container
        display="flex"
        maxW="800px"
        pl="0"
        pr="1.5rem"
				gap='1rem'
        fontSize="1.2rem"
				position='relative'
			>
				<Flex position='absolute' h='30px' top='-15px' gap='.5rem' left={car+'px'}>
					<Box fontSize='12px'w='54px' textAlign='right' position='relative' top='-5px'>
						User <br></br>	
						You
					</Box>
					<Image src={carImg} alt='car' h='100%'/>	
				</Flex>
        <Box
          w="100%"
          borderBottomWidth="2px"
          borderBottomStyle="dashed"
          borderBottomColor={colorMode === "dark" ? "white" : "black"}
        ></Box>
        <Box>
          <span>{minutes}</span>:<span>{seconds}</span>
        </Box>
      </Container>
    </Box>
  );
}

export default RaceLine;
