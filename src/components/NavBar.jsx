import {
  Icon,
  Box,
  Container,
  Link,
  Flex,
  Heading,
  IconButton,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconKeyboard, IconUserCircle } from "@tabler/icons";
import DarkModeSwitcher from "./Buttons/DarkModeSwitcher";
import { BsGithub } from "react-icons/bs";

export default function NavBar() {
  const dmButton = useColorModeValue("", "#44475a");
  const dmColor = useColorModeValue("second_black", "#bd93f9");
  return (
    <Box p="2rem">
      <Container
        maxW="800px"
        display="flex"
        p="0"
        pl='1rem'
        justifyContent="space-between"
      >
        <Flex gap=".5rem" alignItems="center">
          <a href="/" >
            <Heading fontSize="1.5rem">typeracer</Heading>
          </a>
          <Link href="/">
            <Icon fontSize="20px">
              <IconKeyboard />
            </Icon>
          </Link>
        </Flex>
        <Flex alignItems="center" gap=".5rem">
          <IconButton
            size="sm"
            variant="link"
            mr=".5rem"
            color={dmColor}
            icon={
              <Icon fontSize="20px">
                <IconUserCircle />
              </Icon>
            }
          />
        </Flex>
      </Container>
    </Box>
  );
}
