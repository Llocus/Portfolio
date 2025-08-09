import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: '#0D1117',
        color: 'white',
      },
    },
  },
  fonts: {
    heading: `'Fira Code', monospace`,
    body: `'Fira Code', monospace`,
  },
  colors: {
    brand: {
      primary: '#00FF41',
      secondary: '#39FF14',
      light: '#90EE90',
    },
  },
});