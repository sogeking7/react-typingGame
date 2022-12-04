import { useContext } from "react";

import { Button, Icon, useColorModeValue } from "@chakra-ui/react";

import { IconSunHigh, IconMoonStars } from "@tabler/icons";

import { MyContext } from "../../Context/Context";

function DarkModeSwitcher() {
  const { colorMode, toggleColorMode } = useContext(MyContext);

  return (
    <Button
      size="lg"
      onClick={toggleColorMode}
      color="text_icons"
      bgColor="deep_purple"
      _active={{}}
      _focus={{}}
      _hover={{}}
      fontSize="1rem"
      gap=".2rem"
    >
      {colorMode === "dark" ? (
        <Icon>
          <IconMoonStars strokeWidth="3" />
        </Icon>
      ) : (
        <Icon>
          <IconSunHigh strokeWidth="3" />
        </Icon>
      )}
      {colorMode.charAt(0).toUpperCase() + colorMode.slice(1)}
    </Button>
  );
}

export default DarkModeSwitcher;
