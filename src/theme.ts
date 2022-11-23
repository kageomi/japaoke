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

  colors: {
    brand: {
      50: '#fdf0f8',
      100: '#fdddee',
      200: '#fdcce6',
      300: '#fdb2d9',
      400: '#fd99cd',
      500: '#fd85c3',
      600: '#fd60b1',
      700: '#fd40a1',
      800: '#fd2393',
      900: '#fd0181',
    },
    bg: {
      root: {
        base: '#fafafa',
        highlight: 'white',
      },
    },
  },
});

export default theme;
