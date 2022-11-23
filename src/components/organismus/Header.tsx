import { FC } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Logo } from '../atoms/Logo';

const Header: FC<BoxProps> = (props) => {
  return (
    <Box
      paddingX="2em"
      paddingY="0.2em"
      boxShadow="sm"
      bgColor="white"
      {...props}
    >
      <header>
        <Link to="/">
          <Logo isSmall />
        </Link>
      </header>
    </Box>
  );
};

export default Header;
