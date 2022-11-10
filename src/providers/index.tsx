import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import router from 'routes/index';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import theme from 'theme';

export const AppProvider = (): React.ReactElement => {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};
