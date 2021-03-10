import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import { ThemeProvider } from 'styled-components';
import SwitchTheme from '../components/SwitchTheme';

interface ThemeProps {
  mode: 'light' | 'dark';
}

interface SwitchThemeContextData {
  theme: ThemeProps;
  toggleSwitch(): void;
}

interface SwitchThemeProviderProps {
  children: ReactNode;
}

const SwitchThemeContext = createContext({} as SwitchThemeContextData);

export default function SwitchThemeProvider({
  children,
}: SwitchThemeProviderProps): JSX.Element {
  const [theme, setTheme] = useState({} as ThemeProps);

  const toggleSwitch = useCallback(() => {
    theme.mode === 'light'
      ? setTheme({ mode: 'dark' })
      : setTheme({ mode: 'light' });
  }, [theme]);

  return (
    <SwitchThemeContext.Provider value={{ theme, toggleSwitch }}>
      <ThemeProvider theme={theme}>
        {children}
        <SwitchTheme />
      </ThemeProvider>
    </SwitchThemeContext.Provider>
  );
}

export function useSwitchTheme(): SwitchThemeContextData {
  const context = useContext(SwitchThemeContext);

  return context;
}
