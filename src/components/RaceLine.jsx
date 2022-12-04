import React from "react";
import { useContext } from "react";

import { Box, Flex, Image, useColorModeValue } from "@chakra-ui/react";
import carImg from "./../img/car.svg";
import { MyContext } from "../Context/Context";

function RaceLine() {
  const dashedLineColor = useColorModeValue("amber", "white");

  const { minutes, seconds, wpm, car } = useContext(MyContext);

  return (
    <Box maxW="container.lg" margin="0 auto 1rem auto" fontFamily="sans-serif">
      <Box mb="3rem" textAlign="end" fontWeight="bold">
        {minutes}:{seconds < 10 ? "0" : ""}
        {seconds}
      </Box>
      <Box display="flex" gap="1rem" position="relative">
        <Flex
          bottom="5px"
          position="absolute"
          left={car + "px"}
          gap=".2rem"
          h="45px"
          w="160px"
        >
          <Flex
            fontSize="14px"
            textAlign="end"
            fontWeight="bold"
            justifyContent="center"
            flexDirection="column"
          >
            <span>sogeking7</span>
            <span>(you)</span>
          </Flex>
          <Flex alignItems="flex-end">
            <Image src={carImg} alt="car" h="30px" />
          </Flex>
        </Flex>
        <Box
          w="100%"
          borderBottomWidth="2px"
          borderBottomStyle="dashed"
          borderBottomColor={dashedLineColor}
        ></Box>
        <Box fontSize="1rem" w="80px" fontWeight="bold" textAlign="start">
          {wpm} wpm
        </Box>
      </Box>
    </Box>
  );
}

export default RaceLine;
