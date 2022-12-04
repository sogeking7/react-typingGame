import {
  Box,
  Container,
  useColorModeValue,
  Button,
  Icon,
  Flex,
  Link,
} from "@chakra-ui/react";

import { IconMail, IconBrandGithub } from "@tabler/icons";

import DarkModeSwitcher from "./Buttons/DarkModeSwitcher";
import Fonts from "./Fonts";

function Footer() {
  const background = useColorModeValue("primary_color", "primary_text");

  return (
    <Box
      w="100%"
      pt="2rem"
      px="2rem"
      pb="4rem"
      bgColor={background}
      zIndex="10"
      position="absolute"
      bottom="0"
    >
      <Container
        maxW="container.xl"
        p="0"
        fontFamily="sans-serif"
        display="flex"
        justifyContent="space-between"
      >
        <Flex gap="1rem" color="text_icons">
          <Link href="#" display="flex" alignItems="center" gap=".2rem">
            <Icon>
              <IconMail />
            </Icon>
            Contact
          </Link>
          <Link href="#" display="flex" alignItems="center" gap=".2rem">
            <Icon>
              <IconBrandGithub />
            </Icon>
            Github
          </Link>
        </Flex>
        <Flex>
          <DarkModeSwitcher />
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
