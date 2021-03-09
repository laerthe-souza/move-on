import { useChallenges } from '../../hooks/useChallenges';

import { Overlay } from './styles';

export default function LevelUpModal(): JSX.Element {
  const { closeLevelUpModal, level } = useChallenges();

  return (
    <Overlay>
      <div>
        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>

        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>
      </div>
    </Overlay>
  );
}
