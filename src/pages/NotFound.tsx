import { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { H } from 'react-headings';

const NotFound: FC = () => {
  return (
    <Flex
      marginTop="20vh"
      alignItems="center"
      justifyContent="center"
      height="100%"
      color="gray.600"
      padding="2em"
    >
      <Box>
        <H>
          <Text fontSize="4em">404 Page not found :(</Text>
        </H>
        <Text fontSize="2em">this page doesn&apos;t exsist!</Text>
      </Box>
    </Flex>
  );
};

export default NotFound;
