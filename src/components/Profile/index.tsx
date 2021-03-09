import { useChallenges } from '../../hooks/useChallenges';
import { Container } from './styles';

interface ProfileProps {
  name: string;
  avatarUrl: string;
  level: number;
}

export default function Profile({
  name,
  avatarUrl,
  level: userLevel,
}: ProfileProps): JSX.Element {
  const { level } = useChallenges();

  return (
    <Container>
      <img src={avatarUrl} alt={name} />

      <div>
        <strong>{name}</strong>

        <p>
          <img src="/icons/level.svg" alt="Level" />
          Level {userLevel || level}
        </p>
      </div>
    </Container>
  );
}
