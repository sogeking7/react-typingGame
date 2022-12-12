import {
  Box,
  Container,
  Flex,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

import DarkModeSwitcher from "./Buttons/DarkModeSwitcher";

export default function NavBar() {
  const background = useColorModeValue("", "primary_text");
  const textColor = useColorModeValue("black", "white");

  return (
    <Box
      px="1rem"
      py=".5rem"
      bgColor={background}
      color="text_icons"
      fontFamily="sans-serif"
      borderBottomWidth="thin"
    >
      <Container
        maxW="container.xl"
        display="flex"
        p="0"
        color={textColor}
        justifyContent="flex-end"
        alignItems="center"
      >
        <Flex>
          <IconButton variant="ghost" icon={<HamburgerIcon />} />
          <DarkModeSwitcher />
        </Flex>
      </Container>
    </Box>
  );
}
