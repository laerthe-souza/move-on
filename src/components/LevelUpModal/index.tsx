import { motion } from 'framer-motion';

import { useChallenges } from '../../hooks/useChallenges';

import { Overlay } from './styles';

export default function LevelUpModal(): JSX.Element {
  const { closeLevelUpModal, level } = useChallenges();

  return (
    <Overlay>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 8,
        }}
      >
        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>

        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>
      </motion.div>
    </Overlay>
  );
}
