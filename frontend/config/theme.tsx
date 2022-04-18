import { css, DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    spacings: typeof spacings;
    colors: typeof colors;
    deviceWidths: typeof deviceWidths;
    layouts: typeof layouts;
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

const layouts = {
  container: css`
    padding-left: ${spacings.s};
    padding-right: ${spacings.s};

    @media screen and (min-width: ${deviceWidths.mobile}) {
      max-width: 1260px;
      width: 100%;
      margin: auto;
      padding-left: ${spacings.m};
      padding-right: ${spacings.m};
    }
  `,
};

export const theme: DefaultTheme = {
  name: 'myTheme',
  spacings,
  colors,
  layouts,
  deviceWidths,
};
