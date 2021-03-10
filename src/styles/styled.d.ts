import 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme {
    mode: 'light' | 'dark';
  }
}
