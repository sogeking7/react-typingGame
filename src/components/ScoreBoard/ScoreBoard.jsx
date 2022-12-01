import { Flex, Box, Text, Icon, Button} from "@chakra-ui/react";
import { IconUser } from "@tabler/icons";

export default function ScoreBoard() {
  return (
		<Button variant='outline' fontSize='.7rem' alignItems='center'>
			<Icon  w='20px' h='20px' mr='.5rem'>
				<IconUser />
			</Icon>
			<Text>User</Text>
		</Button>
	);
}
