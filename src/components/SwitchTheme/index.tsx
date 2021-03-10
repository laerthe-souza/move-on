import { FaMoon, FaSun } from 'react-icons/fa';

import { useSwitchTheme } from '../../hooks/useSwitchTheme';

import { Container } from './styles';

export default function SwitchTheme(): JSX.Element {
  const { theme, toggleSwitch } = useSwitchTheme();

  return (
    <Container themeMode={theme.mode} onClick={toggleSwitch}>
      <span>
        {theme.mode === 'light' ? (
          <FaSun size={15} color="#fff" />
        ) : (
          <FaMoon size={15} color="#fff" />
        )}
      </span>
    </Container>
  );
}
