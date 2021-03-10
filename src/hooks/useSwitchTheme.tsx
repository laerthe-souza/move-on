import Cookies from 'js-cookie';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ThemeProvider } from 'styled-components';
import SwitchTheme from '../components/SwitchTheme';

interface ThemeProps {
  mode: 'light' | 'dark' | string;
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
  const [theme, setTheme] = useState<ThemeProps>({} as ThemeProps);

  const toggleSwitch = useCallback(() => {
    if (theme.mode === 'light') {
      setTheme({ mode: 'dark' });
      Cookies.set('theme', 'dark');
    } else {
      setTheme({ mode: 'light' });
      Cookies.set('theme', 'light');
    }
  }, [theme]);

  useEffect(() => {
    const themeMode = Cookies.get('theme');

    if (themeMode) {
      setTheme({ mode: themeMode });
    } else {
      setTheme({ mode: 'light' });
    }
  }, []);

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
