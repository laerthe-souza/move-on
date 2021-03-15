import { FiX } from 'react-icons/fi';
import { MdPlayArrow, MdCheckCircle } from 'react-icons/md';
import { useChallenges } from '../../hooks/useChallenges';
import { useCountdown } from '../../hooks/useCountdown';
import { useSettings } from '../../hooks/useSettings';

import { Container, CountdownButton, Timer } from './styles';

export default function Countdown(): JSX.Element {
  const {
    minutes,
    seconds,
    isActive,
    isPause,
    hasFinished,
    startCountdown,
    resetCountdown,
  } = useCountdown();
  const { resetChallenge } = useChallenges();
  const { countdown, pauseCountdown } = useSettings();

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <Container>
      <div>
        <Timer>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </Timer>

        <span>:</span>

        <Timer>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </Timer>
      </div>

      {hasFinished ? (
        <CountdownButton disabled className="finished">
          Ciclo encerrado
          <MdCheckCircle size={25} color="#4cd62b" />
        </CountdownButton>
      ) : (
        <>
          {!isActive ? (
            <CountdownButton type="button" onClick={startCountdown}>
              {isPause ? 'Iniciar pausa' : ' Iniciar um ciclo'}
              <MdPlayArrow size={25} color="#fff" />
            </CountdownButton>
          ) : (
            <CountdownButton
              countdown={isPause ? pauseCountdown : countdown}
              type="button"
              onClick={() => {
                resetCountdown();
                resetChallenge();
              }}
              className="active"
            >
              {isPause ? 'Abandonar pausa' : 'Abandonar ciclo'}
              <FiX size={25} />
            </CountdownButton>
          )}
        </>
      )}
    </Container>
  );
}
