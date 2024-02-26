import { Box, Flex, Image, useColorModeValue } from "@chakra-ui/react";

import { useState, useEffect } from "react";

import useMeasure from 'react-use-measure'

import carImg from "../../img/car.svg";

function RaceLine({ timer, wpm, start, index, textLength }) {
  const dashedLineColor = useColorModeValue("orange.300", "whiteAlpha.400");
  
  const [car, setCar] = useState(0),
        [ref, bounds] = useMeasure()  
  
  useEffect(()=>{
    setCar(index * (bounds.width - 160 + 12) / textLength) 
  }, [bounds, index])

  return (
    <Box maxW="container.lg" margin="0 auto 1rem auto" overflowX='hidden' fontFamily="sans-serif">
      <Box mb="3rem" textAlign="end" fontWeight="bold">
        {start !== -1 ? timer : <pre> </pre>}
      </Box>
      <Flex position="relative">
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
          ref={ref}
          w="100%"
          borderBottomWidth="2px"
          borderBottomStyle="dashed"
          borderBottomColor={dashedLineColor}
          overflowX='hidden'
          mr='1rem'
        ></Box>
        <Box fontSize="1rem" w="85px" overflowX='hidden' fontWeight="bold" textAlign="start">
          {wpm} wpm
        </Box>
      </Flex>
    </Box>
  );
}

export default RaceLine;
