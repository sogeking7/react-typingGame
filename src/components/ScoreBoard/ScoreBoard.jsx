import { Text, Icon, Button, useColorModeValue } from "@chakra-ui/react";
import { IconUser } from "@tabler/icons";

export default function ScoreBoard() {
  const dmColor = useColorModeValue("second_black", "white");

  return (
    <Button
      variant="link"
      size="xl"
      alignItems="center"
      mr="1rem"
			color={dmColor}
      _hover={{ textDecoration: "underline", textDecorationThickness: "2px" }}
    >
      <Icon w="24px" h="24px" mr=".2rem">
        <IconUser />
      </Icon>
      <Text>User</Text>
    </Button>
  );
}
