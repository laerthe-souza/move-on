import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useChallenges } from './useChallenges';
import { useSettings } from './useSettings';

interface CountdownContextData {
  countdown: number;
  pauseCountdown: number;
  minutes: number;
  seconds: number;
  isActive: boolean;
  isPause: boolean;
  hasFinished: boolean;
  startCountdown(): void;
  resetCountdown(): void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export default function CountdownProvider({
  children,
}: CountdownProviderProps): JSX.Element {
  const { startNewChallenge } = useChallenges();
  const { countdown, pauseCountdown } = useSettings();

  const [time, setTime] = useState(countdown);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const [isPause, setIsPause] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const startCountdown = useCallback(() => {
    setIsActive(true);
  }, []);

  const resetCountdown = useCallback(() => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setIsPause(false);
    setTime(countdown);
    setHasFinished(false);
  }, [countdown]);

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && !isPause && time === 0) {
      startNewChallenge();
      setIsPause(true);
      setIsActive(false);
      setTime(pauseCountdown);
    } else if (isActive && isPause && time === 0) {
      new Audio('/notification.mp3').play();

      if (Notification.permission === 'granted') {
        new Notification('Fim do descanso', {
          body: 'Hora de voltar ao trabalho 💪. Você completou o desafio?',
        });
      }

      setIsActive(false);
      setHasFinished(true);
      setIsPause(false);
    }
  }, [isActive, time]);

  useEffect(() => {
    setTime(countdown);
  }, [countdown]);

  return (
    <CountdownContext.Provider
      value={{
        countdown,
        pauseCountdown,
        minutes,
        seconds,
        isActive,
        isPause,
        hasFinished,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}

export function useCountdown(): CountdownContextData {
  const context = useContext(CountdownContext);

  return context;
}
