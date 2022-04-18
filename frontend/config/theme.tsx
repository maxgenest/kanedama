import { css, DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    fontSizes: typeof fontSizes;
    spacings: typeof spacings;
    colors: typeof colors;
    deviceWidths: typeof deviceWidths;
  }
}

const fontSizes = {
  m: '16px',
  l: '32px',
}

const spacings = {
  s: '15px',
  ms: '20px',
  m: '30px',
  ml: '40px',
  l: '60px',
};

const colors = {
  white: '#ffffff',
  greyLight: '#f9f9f9',
  grey: '#F6F5Fc',
  greyDark: '#183753',
  blue: '#6347d1',
};

const deviceWidths = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1440px',
};

export const theme: DefaultTheme = {
  name: 'myTheme',
  fontSizes,
  spacings,
  colors,
  deviceWidths,
};
