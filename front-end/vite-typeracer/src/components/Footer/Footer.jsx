import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Contact from "../../routes/contact";

function Footer() {
  return (
    <Flex
      position="absolute"
      bottom="0"
      left="0"
      overflow="hidden"
      w="full"
      borderTopWidth="thin"
      justifyContent="center"
    >
      <Box>
        <Contact />
      </Box>
    </Flex>
  );
}

export default Footer;
