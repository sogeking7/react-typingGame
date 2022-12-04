import {
  Icon,
  Box,
  Container,
  Link,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconKeyboard, IconUserCircle } from "@tabler/icons";

export default function NavBar() {
  const background = useColorModeValue("primary_color", "primary_text");

  return (
    <Box
      py="1rem"
      px="2rem"
      bgColor={background}
      color="text_icons"
      fontFamily="sans-serif"
    >
      <Container
        maxW="container.xl"
        display="flex"
        p="0"
        justifyContent="space-between"
      >
        <Flex gap=".5rem" alignItems="center">
          <a href="/">
            <Heading fontSize="1.5rem">typeracer</Heading>
          </a>
          <Link href="/">
            <Icon fontSize="20px">
              <IconKeyboard />
            </Icon>
          </Link>
        </Flex>
        <Flex alignItems="center" gap=".5rem">
          <Icon fontSize="20px">
            <IconUserCircle />
          </Icon>
        </Flex>
      </Container>
    </Box>
  );
}
