import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Footer from 'components/organismus/Footer';

const TopLayout: FC = () => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      bgColor="bg.root.base"
      fontSize={['sm', 'md', 'md', 'xl']}
    >
      <Outlet />
      <Footer marginTop="auto" />
    </Box>
  );
};

export default TopLayout;
