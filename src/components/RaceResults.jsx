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
import { useContext } from "react";
import { MyContext } from "../Context/Context";
import { data } from "../data/data";

const length = data.text.length - 1;

function RaceResults() {
  const headingColor = useColorModeValue("");
  const backgroundColor = useColorModeValue("primary_color", "primary_text");

  const { wpm, seconds, minutes, accuracy } = useContext(MyContext);

  const Seconds = Math.round(180 - (minutes * 60 + seconds));

  return (
    <Box
      fontFamily="mono"
      bgColor={backgroundColor}
      borderRadius="lg"
      p="1rem"
      color="text_icons"
    >
      <Heading as="h1" mb="3" fontSize="20px">
        Race Results
      </Heading>
      <Flex>
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
							strokeWidth='3'
            />
            <Text display="inline" color="light_primary_color">
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
							strokeWidth='3'
            />
            <Text display="inline" color="light_primary_color">
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
							strokeWidth='3'
            />
            <Text display="inline" color="light_primary_color">
              Accuracy:
            </Text>
          </ListItem>
        </List>
        <List listStyleType="none" spacing="5" w="200px" fontWeight="bold">
          <ListItem>{wpm} wpm</ListItem>
          <ListItem>
            {Math.floor(Seconds / 60)}:{Seconds % 60 < 10 ? "0" : ""}
            {Seconds % 60}
          </ListItem>
          <ListItem>{
						parseFloat((((accuracy) * 100) / length)).toFixed(1) 
					}%</ListItem>
        </List>
      </Flex>
			
    </Box>
  );
}

export default RaceResults;
