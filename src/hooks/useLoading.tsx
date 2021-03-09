import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import Loading from '../components/Loading';

interface LodingContextData {
  isLoading(value: boolean): void;
}

interface LoadingProviderProps {
  children: ReactNode;
}

const LoadingContext = createContext({} as LodingContextData);

export default function LoadingProvider({
  children,
}: LoadingProviderProps): JSX.Element {
  const [loading, setLoading] = useState(false);

  const isLoading = useCallback(value => {
    setLoading(value);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      {children}
      <Loading isLoading={loading} />
    </LoadingContext.Provider>
  );
}

export function useLoading(): LodingContextData {
  const context = useContext(LoadingContext);

  return context;
}
