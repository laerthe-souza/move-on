import { useChallenges } from '../../hooks/useChallenges';

import { Container } from './styles';

export default function CompletedChallegnes(): JSX.Element {
  const { challengesCompleted } = useChallenges();

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  );
}
