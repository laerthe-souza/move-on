import { RingLoader } from 'react-spinners';
import { useSwitchTheme } from '../../hooks/useSwitchTheme';

import { Container } from './styles';

interface LoadingProps {
  isLoading: boolean;
}

export default function Loading({ isLoading }: LoadingProps): JSX.Element {
  const { theme } = useSwitchTheme();

  return (
    <Container isLoading={isLoading}>
      <RingLoader color={theme.mode === 'light' ? '#5965e0' : '#4cd62b'} />
    </Container>
  );
}
