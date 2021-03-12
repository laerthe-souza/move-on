import { FaTwitter } from 'react-icons/fa';
import { useChallenges } from '../../hooks/useChallenges';

import { Overlay } from './styles';

export default function LevelUpModal(): JSX.Element {
  const { closeLevelUpModal, level } = useChallenges();

  const twitterText = `Alcancei o level ${level} no move.on!!!
 Venha conhecer esse aplicativo super legal, baseado na Técnica Pomodoro
 com desafios para a saúde física, melhorando o foco e a produtividade enquanto trabalhamos.`;

  return (
    <Overlay>
      <div>
        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>

        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <a
          target="_blank"
          href={`https://twitter.com/intent/tweet?related=twitterapi%2Ctwitter
					&text=${twitterText}&tw_p=tweetbutton&url=%0A%0Ahttps://moveonpomodoro.vercel.app`}
        >
          Compartilhar no Twitter
          <FaTwitter size={25} />
        </a>
      </div>
    </Overlay>
  );
}
