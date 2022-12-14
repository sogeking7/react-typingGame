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
  const onHover = useColorModeValue("gray.200", "blackAlpha.400");
  return (
    <Menu>
      <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="ghost" />
      <MenuList bgColor={background}>
        <MenuItem
          bgColor={background}
          _hover={{ bgColor: onHover }}
          icon={<IconUser />}
          fontWeight="bold"
        >
          Profile
        </MenuItem>
        <MenuItem
          bgColor={background}
          _hover={{ bgColor: onHover }}
          icon={<IconKeyboard />}
        >
          Practice
        </MenuItem>
        <MenuItem
          bgColor={background}
          _hover={{ bgColor: onHover }}
          icon={<IconCar />}
        >
          Multiplayer
        </MenuItem>
        <MenuItem
          bgColor={background}
          _hover={{ bgColor: onHover }}
          icon={<IconFlame />}
          mb=".5rem"
        >
          High Scores
        </MenuItem>
        <Box px=".5rem">
          <Button variant="solid" w="full" colorScheme="red">
            Log out
          </Button>
        </Box>
      </MenuList>
    </Menu>
  );
}

export default MenuChakra;
