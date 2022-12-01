import {
  Icon,
  Box,
  Link,
  Container,
  Flex,
  Heading,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconMoonStars, IconSunHigh, IconKeyboard } from "@tabler/icons";
import ScoreBoard from "./ScoreBoard/ScoreBoard";

export default function NavBar() {
  const bg = useColorModeValue("white", "black");
  const dmColor = useColorModeValue("black", "white");
  const { colorMode, toggleColorMode } = useColorMode("");
  return (
    <Box bgColor={bg} mb="2rem" p="1rem" borderBottomColor="blackAlpha.200" borderBottomWidth='1px'>
      <Container
        maxW="800px"
        display="flex"
        p="0"
        justifyContent="space-between"
      >
        <Flex alignItems="center" gap=".5rem">
          <a href="/">
            <Heading>Typeracer</Heading>
          </a>
          <Icon fontSize="40px">
            <IconKeyboard />
          </Icon>
        </Flex>
        <Flex alignItems="center">
          <ScoreBoard />
          <IconButton
            variant="link"
            size="xl"
            color={dmColor}
            icon={colorMode === "dark" ? <IconSunHigh /> : <IconMoonStars />}
            onClick={toggleColorMode}
          />
        </Flex>
      </Container>
    </Box>
  );
}
