import { FC } from 'react';
import { Flex, Box, BoxProps, Text } from '@chakra-ui/react';

const Footer: FC<BoxProps> = (props) => {
  return (
    <Box {...props}>
      <footer>
        <Flex
          fontSize="0.7em"
          padding="2em"
          bgColor="#fff"
          borderTop="1px"
          borderColor="#fdfdfd"
          color="gray.500"
          justifyContent="space-around"
          flexWrap="wrap"
        >
          <Text>powered by yahoo</Text>
          <Text>powered by genius</Text>
          <Text>©2022 kageomi</Text>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;
