import { useChallenges } from '../../hooks/useChallenges';
import { Container, Experience } from './styles';

export default function ExperienceBar(): JSX.Element {
  const { experienceToNextLevel, currentExperience } = useChallenges();

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Container>
      <span>0 xp</span>

      <Experience progress={percentToNextLevel}>
        <div>
          <span>{currentExperience} xp</span>
        </div>
      </Experience>

      <span>{experienceToNextLevel} xp</span>
    </Container>
  );
}
