import { Flex, Box, Icon } from "@chakra-ui/react";
import { IconUser } from "@tabler/icons";

export default function ScoreBoard() {
  return (
		<Flex>
			<Icon fontSize='2rem' w='40px' h='40px' mr='.5rem'>
				<IconUser />
			</Icon>
			<h1>User </h1>
		</Flex>
	);
}
