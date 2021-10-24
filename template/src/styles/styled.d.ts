import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;

    common: {
      black: string;
      white: string;
    };

    primary: string;
    secondary: string;

    error: string;
    warning: string;
    info: string;
    success: string;

    contrastText: string;
    text: {
      primary: string;
      secondary: string;
      disabled: string;
    };

    background: string;

    borderRadius: string;
  }
}
