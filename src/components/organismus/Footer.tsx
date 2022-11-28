import { FC } from 'react';
import { Flex, Box, BoxProps, Link } from '@chakra-ui/react';
import { GENIUS_URL, YAHOO_URL, GITHUB_URL } from 'settings';

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
          <Link href={YAHOO_URL} target="_blank">
            powered by yahoo
          </Link>
          <Link href={GENIUS_URL} target="_blank">
            powered by genius
          </Link>
          <Link href={GITHUB_URL} target="_blank">
            ©2022 kageomi
          </Link>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;
