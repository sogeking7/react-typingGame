import {
  Box,
  Container,
  useColorModeValue,
  Icon,
  Flex,
  Link,
} from "@chakra-ui/react";

import { IconMail, IconBrandGithub } from "@tabler/icons";

import DarkModeSwitcher from "./Buttons/DarkModeSwitcher";

function Footer() {
  const background = useColorModeValue("dark_primary_color", "primary_text");

  return (
    <Box
      w="100%"
      p='1rem'
      bgColor={background}
      
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