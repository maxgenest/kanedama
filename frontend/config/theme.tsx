import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    spacings: typeof spacings;
  }
}

const spacings = {
  s: '15px',
  m: '30px',
  l: '60px',
};

export const theme: DefaultTheme = {
  name: 'myTheme',
  spacings,
};
