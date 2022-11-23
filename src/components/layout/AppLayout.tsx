import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Footer from 'components/organismus/Footer';
import Header from 'components/organismus/Header';

const AppLayout: FC = () => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      bgColor="bg.root.base"
      fontSize={['sm', 'md', 'md', 'xl']}
    >
      <Header />
      <Box flexGrow="1">
        <Outlet />
      </Box>
      <Footer marginTop="auto" />
    </Box>
  );
};

export default AppLayout;
