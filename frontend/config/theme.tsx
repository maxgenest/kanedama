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
  l: '28px',
};

const spacings = {
  xxs: '4px',
  xs: '8px',
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
  blueLight: '#f5f3fb',
  blue: '#6347d1',
  red: '#ff0c39',
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
