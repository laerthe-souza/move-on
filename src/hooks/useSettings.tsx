import { AnimatePresence } from 'framer-motion';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import Settings from '../components/Settings';

interface SettingsContextData {
  appMode: string;
  countdown: number;
  pauseCountdown: number;
  toggleShowModalSettings(): void;
  saveChanges(appModeValue: string): void;
}

interface SettingsProviderProps {
  children: ReactNode;
}

const SettingsContext = createContext({} as SettingsContextData);

export default function SettingsProvider({
  children,
}: SettingsProviderProps): JSX.Element {
  const [showSettings, setShowSettings] = useState(false);
  const [appMode, setAppMode] = useState(process.env.NEXT_PUBLIC_APP_MODE);

  const [countdown, setCountdown] = useState(1500);
  const [pauseCountdown, setPauseCountdown] = useState(300);

  const toggleShowModalSettings = useCallback(() => {
    setShowSettings(!showSettings);
  }, [showSettings]);

  const saveChanges = useCallback((appModeValue: string) => {
    setAppMode(appModeValue);
    setShowSettings(false);
  }, []);

  useEffect(() => {
    setCountdown(appMode === 'default' ? 1500 : 10);
    setPauseCountdown(appMode === 'default' ? 300 : 5);
  }, [appMode]);

  return (
    <SettingsContext.Provider
      value={{
        appMode,
        countdown,
        pauseCountdown,
        toggleShowModalSettings,
        saveChanges,
      }}
    >
      {children}
      <AnimatePresence>{showSettings && <Settings />}</AnimatePresence>
    </SettingsContext.Provider>
  );
}

export function useSettings(): SettingsContextData {
  const context = useContext(SettingsContext);

  return context;
}
