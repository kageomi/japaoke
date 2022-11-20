import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import router from 'routes/index';

import theme from 'theme';
import { ToastProvider } from './ToastProvider';

export const AppProvider = (): React.ReactElement => {
  return (
    <ChakraProvider theme={theme}>
      <ToastProvider>
        <RouterProvider router={router} />
      </ToastProvider>
    </ChakraProvider>
  );
};
