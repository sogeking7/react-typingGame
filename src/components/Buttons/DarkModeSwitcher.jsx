import { React, useContext } from "react";
import { IconButton, Button, Icon, useColorModeValue } from "@chakra-ui/react";
import { IconSunHigh, IconMoonStars } from "@tabler/icons";
import { MyContext } from "../../Context/Context";

function DarkModeSwitcher() {
  const { colorMode, toggleColorMode } = useContext(MyContext);
  const dmColor = useColorModeValue("black", "white");
  return (
    <Button variant='link' fontSize='12px' fontWeight='thin' onClick={toggleColorMode} color={dmColor} gap='.2rem'>
			{colorMode === 'dark' ?
				<Icon><IconMoonStars /></Icon> :
				<Icon><IconSunHigh /></Icon>
			}
			{
				colorMode.charAt(0).toUpperCase() + colorMode.slice(1)
			}
		</Button>
  );
}

export default DarkModeSwitcher;
