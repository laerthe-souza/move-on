import { RingLoader } from 'react-spinners';

import { Container } from './styles';

interface LoadingProps {
  isLoading: boolean;
}

export default function Loading({ isLoading }: LoadingProps): JSX.Element {
  return (
    <Container isLoading={isLoading}>
      <RingLoader color="#5965e0" />
    </Container>
  );
}
