import { css, DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    spacings: typeof spacings;
    colors: typeof colors;
    deviceWidths: typeof deviceWidths;
  }
}

const spacings = {
  s: '15px',
  m: '30px',
  l: '60px',
};

const colors = {
  white: '#ffffff',
  greyLight: '#f9f9f9',
  grey: '#F6F5Fc',
};

const deviceWidths = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1440px',
};

export const theme: DefaultTheme = {
  name: 'myTheme',
  spacings,
  colors,
  deviceWidths,
};
