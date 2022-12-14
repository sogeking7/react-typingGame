import { Box, Button, Flex, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex position='absolute' bottom='0' left='0' 
		w='full' borderTopWidth="thin" p="1rem" justifyContent='center'>
      <Box>
        Made with ❤️ by{" "}
        <a href="https://github.com/sogeking7">
          <Text display='inline' fontWeight='bold' _hover={{textDecoration: 'underline'}}>sogeking7</Text>
        </a>
      </Box>
    </Flex>
  );
}

export default Footer;
