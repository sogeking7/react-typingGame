import { useContext } from "react";

import { Button, Icon } from "@chakra-ui/react";

import { IconSunHigh, IconMoonStars } from "@tabler/icons";

import { MyContext } from "../Context/Context";

function DarkModeSwitcher() {
  const { colorMode, toggleColorMode } = useContext(MyContext);

  return (
    <Button
      size="md"
      onClick={toggleColorMode}
      color="text_icons"
      bgColor="deep_purple"
      _active={{}}
      _focus={{}}
      _hover={{}}
      gap=".2rem"
    >
     
    </Button>
  );
}

export default DarkModeSwitcher;
