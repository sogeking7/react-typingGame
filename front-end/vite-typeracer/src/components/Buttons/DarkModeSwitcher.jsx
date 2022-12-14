import { useContext } from "react";

import { IconButton } from "@chakra-ui/react";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import { MyContext } from "../Context/Context";

function DarkModeSwitcher() {
  const { colorMode, toggleColorMode } = useContext(MyContext);

  return (
    <IconButton
      variant="ghost"
      onClick={toggleColorMode}
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    />
  );
}

export default DarkModeSwitcher;
