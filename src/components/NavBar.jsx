import {
  Icon,
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconKeyboard, IconUserCircle } from "@tabler/icons";
import DarkModeSwitcher from "./Buttons/DarkModeSwitcher";
import {BsGithub} from 'react-icons/bs'

export default function NavBar() {
  const dmColor = useColorModeValue("second_black", "white");
  return (
    <Box p="2rem">
      <Container
        maxW="800px"
        display="flex"
        p="0"
        justifyContent="space-between"
      >
        <Button variant="ghost" gap=".5rem" size='lg' fontSize='20px' px='1rem'>
          typeracer 
          <Icon fontSize="20px">
            <IconKeyboard />
          </Icon>
        </Button>
        <Flex alignItems="center" gap=".5rem">
          <IconButton
            size="sm"
            variant="ghost"
            mr='.5rem'
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
