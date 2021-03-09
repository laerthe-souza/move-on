import challenges from '../../../challenges.json';
import { useChallenges } from '../../hooks/useChallenges';
import { useCountdown } from '../../hooks/useCountdown';

import {
  ActiveChallengeBox,
  Container,
  InactiveChallengeBox,
  PreparingChallengeBox,
} from './styles';

export default function ChallengesBox(): JSX.Element {
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge,
  } = useChallenges();
  const { isActive, resetCountdown } = useCountdown();

  return (
    <Container>
      {activeChallenge ? (
        <ActiveChallengeBox>
          <header>Ganhe {activeChallenge.amount} de xp</header>

          <main>
            <img
              src={`icons/${activeChallenge.type}.svg`}
              alt={activeChallenge.type}
            />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              className="failedButton"
              type="button"
              onClick={() => {
                resetChallenge();
                resetCountdown();
              }}
            >
              Falhei
            </button>

            <button
              className="succeededButton"
              type="button"
              onClick={() => {
                completeChallenge();
                resetCountdown();
              }}
            >
              Completei
            </button>
          </footer>
        </ActiveChallengeBox>
      ) : (
        <>
          {!isActive ? (
            <InactiveChallengeBox>
              <strong>Inicie um ciclo para receber desafios</strong>

              <p>
                <img src="/icons/level-up.svg" alt="Level Up" />
                Avance de level completando desafios{' '}
              </p>
            </InactiveChallengeBox>
          ) : (
            <PreparingChallengeBox>
              <strong>
                Finalize um ciclo para saber qual é o desafio a ser completado
              </strong>

              <p>
                <img src="/icons/level-up.svg" alt="Level Up" />
                Complete-os, ganhe experiência e avance de level
              </p>
            </PreparingChallengeBox>
          )}
        </>
      )}
    </Container>
  );
}
