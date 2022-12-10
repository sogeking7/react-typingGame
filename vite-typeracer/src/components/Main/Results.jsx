import {
  Box,
  Heading,
  ListIcon,
  ListItem,
  List,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconCheck, IconKeyboard, IconClockHour9 } from "@tabler/icons";

function Results({ stopwatch, wpm, accuracy}) {
  const backgroundColor = useColorModeValue("dark_primary_color", "primary_text"),
        bgHeading = useColorModeValue("dark_primary_color", "text_wrapper_dark");

  return (
    <Box
      fontFamily="mono"
      bgColor={backgroundColor}
      borderRadius="xl"
      color="text_icons"
    >
      <Heading
        fontSize="20px"
        p=".5rem 1rem"
        borderTopRadius="xl "
        bgColor={bgHeading}
      >
        Race Results
      </Heading>
      <Flex p="1rem">
        <List listStyleType="none" spacing="3" w="200px" color="text_icons">
          <ListItem display="flex" alignItems="center">
            <ListIcon
              as={IconKeyboard}
              w="30px"
              p=".3rem"
              borderRadius="full"
              bgColor="text_icons"
              color="accent_color"
              h="30px"
              strokeWidth="3"
            />
            <Text display="inline" color="text_icons">
              Your speed:
            </Text>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <ListIcon
              as={IconClockHour9}
              w="30px"
              p=".3rem"
              borderRadius="full"
              bgColor="text_icons"
              color="accent_color"
              h="30px"
              strokeWidth="3"
            />
            <Text display="inline" color="text_icons">
              Time:
            </Text>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <ListIcon
              as={IconCheck}
              w="30px"
              p=".3rem"
              borderRadius="full"
              bgColor="text_icons"
              color="accent_color"
              h="30px"
              strokeWidth="3"
            />
            <Text display="inline" color="text_icons">
              Accuracy:
            </Text>
          </ListItem>
        </List>
        <List listStyleType="none" spacing="5" w="200px" fontWeight="bold">
          <ListItem>{wpm} wpm</ListItem>
          <ListItem>
            {stopwatch}
          </ListItem>
          <ListItem>{accuracy}%</ListItem>
        </List>
      </Flex>
    </Box>
  );
}

export default Results;
