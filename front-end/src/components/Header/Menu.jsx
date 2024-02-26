import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconUser, IconCar, IconKeyboard, IconFlame } from "@tabler/icons";

function MenuChakra() {
  const background = useColorModeValue("white", "#262729");
  const onHover = useColorModeValue("gray.200", "blackAlpha.500");
  return (
    <Menu>
      <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="ghost" />
      <MenuList bgColor={background}>
        <MenuItem
          bgColor={background}
          _hover={{ bgColor: onHover }}
          fontWeight="bold"
        >
          Profile
        </MenuItem>
        <MenuItem bgColor={background} _hover={{ bgColor: onHover }}>
          Practice
        </MenuItem>
        <MenuItem bgColor={background} _hover={{ bgColor: onHover }}>
          Multiplayer
        </MenuItem>
        <MenuItem bgColor={background} _hover={{ bgColor: onHover }}>
          High Scores
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default MenuChakra;
