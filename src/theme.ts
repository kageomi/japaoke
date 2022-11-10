import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontSize: 'lg',
      },
    },
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  brand: {
    50: '#7928CA',
    100: '#7928CA',
    200: '#7928CA',
    300: '#7928CA',
    400: '#7928CA',
    500: '#7928CA',
    600: '#7928CA',
    700: '#7928CA',
    800: '#7928CA',
    900: '#7928CA',
  },
});

export default theme;
