import axios from 'axios';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import Cookies from 'js-cookie';

import challenges from '../../challenges.json';
import LevelUpModal from '../components/LevelUpModal';

interface Challenge {
  type: string;
  description: string;
  amount: number;
}

interface ChallengesContextData {
  challenges: Challenge[];
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  startNewChallenge(): void;
  resetChallenge(): void;
  completeChallenge(): void;
  closeLevelUpModal(): void;
}

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  totalExperience: number;
  challengesCompleted: number;
}

const ChallengesContext = createContext({} as ChallengesContextData);

export default function ChallengesProvider({
  children,
  ...rest
}: ChallengesProviderProps): JSX.Element {
  const [level, setLevel] = useState(rest.level || 1);
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience || 0,
  );
  const [totalExperience, setTotalExperience] = useState(
    rest.totalExperience || 0,
  );
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted || 0,
  );
  const [activeChallenge, setActiveChallenge] = useState<Challenge>(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  const startNewChallenge = useCallback(() => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount} de xp`,
      });
    }
  }, []);

  const resetChallenge = useCallback(() => {
    setActiveChallenge(null);
  }, []);

  const closeLevelUpModal = useCallback(() => {
    setIsLevelUpModalOpen(false);
  }, []);

  const levelUp = useCallback(() => {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }, [level]);

  const completeChallenge = useCallback(() => {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel;
      levelUp();
    }

    setTotalExperience(totalExperience + amount);
    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }, [
    activeChallenge,
    currentExperience,
    experienceToNextLevel,
    totalExperience,
    levelUp,
    challengesCompleted,
  ]);

  useEffect(() => {
    const { name, username, avatarUrl } = JSON.parse(Cookies.get('userdata'));

    Cookies.defaults.expires = 1;

    Cookies.set(
      'userdata',
      JSON.stringify({
        name,
        username,
        avatarUrl,
        level,
        currentExperience,
        totalExperience,
        challengesCompleted,
      }),
    );

    axios.patch('/api/users', {
      username,
      level,
      currentExperience,
      totalExperience,
      challengesCompleted,
    });
  }, [level, currentExperience, totalExperience, challengesCompleted]);

  return (
    <ChallengesContext.Provider
      value={{
        challenges,
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
        closeLevelUpModal,
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
}

export function useChallenges(): ChallengesContextData {
  const context = useContext(ChallengesContext);

  return context;
}
