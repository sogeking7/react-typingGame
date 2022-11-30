import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
function RaceLine({ minutes, seconds }) {
  return (
    <Box mb="1rem" h='40px' >
      <Container display='flex' maxW="800px" pl='0' pr="1.5rem" fontSize="1.2rem">
        <Box w="100%" borderBottomWidth='2px' borderBottomStyle='dashed' borderBottomColor='white' h='40px'>

				</Box>
        <Box>
          <span>{minutes}</span>:<span>{seconds}</span>
        </Box>
      </Container>
    </Box>
  );
}

export default RaceLine;
