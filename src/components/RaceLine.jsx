import React from "react";
import { useContext } from "react";

import { Box, Image, Container, Flex } from "@chakra-ui/react";
import carImg from "./../img/car.svg";
import { MyContext } from "../Context/Context";


function RaceLine() {


  const {minutes, seconds, wpm, car} = useContext(MyContext);

  return (
    <Box mb="1rem">
      <Container
        h="25px"
        display="flex"
        maxW="800px"
        px="1rem"
        gap="1rem"
        fontSize="1.2rem"
        position="relative"
        mb='3rem'
      >
        {minutes}:{seconds < 10 ? '0' : ''}{seconds}
      </Container>
      <Container

        h="25px"
        display="flex"
        maxW="800px"
        px="1rem"
        gap="1rem"
        fontSize="1.2rem"
        position="relative"
      >
        <Flex
          position="absolute"
          h="30px"
          top="-10px"
          gap=".5rem"
          left={car + "px"}
        >
          <Box
            fontSize="12px"
            w="54px"
            textAlign="right"
            position="relative"
            top="-5px"
          >
            User <br></br>
            (you)
          </Box>
          <Image src={carImg} alt="car" h="100%" />
        </Flex>
        <Box
          w="100%"
          borderBottomWidth="2px"
          borderBottomStyle="dashed"
        ></Box>
        <Box fontSize="1rem" w="80px" fontWeight='bold' textAlign='start'>
          {wpm} wpm
        </Box>
      </Container>
    </Box>
  );
}

export default RaceLine;
