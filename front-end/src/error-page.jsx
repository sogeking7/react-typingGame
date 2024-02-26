import { useRouteError } from "react-router-dom";
import { Box, Flex, Heading, Text} from "@chakra-ui/react";
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
		<Flex h='100vh' alignItems='center'>
			<Flex id="error-page" alignItems='center' w='full' gap='2rem' flexDirection='column'>
      <Heading>Oops!</Heading>
      <Text>Sorry, an unexpected error has occurred.</Text>
      <Text fontStyle='italic'>
        {error.statusText || error.message}
      </Text>
    </Flex>
		</Flex>
  );
}
export default ErrorPage;