import Cookies from 'js-cookie';
import Link from 'next/link';
import { useCallback } from 'react';
import { FiHome, FiAward, FiPower } from 'react-icons/fi';
import { useLoading } from '../../hooks/useLoading';
import { useSwitchTheme } from '../../hooks/useSwitchTheme';

import { Container } from './styles';

interface SideBarProps {
  page: string;
}

export default function SideBar({ page }: SideBarProps): JSX.Element {
  const { isLoading } = useLoading();
  const { theme } = useSwitchTheme();

  const handleLogout = useCallback(() => {
    Cookies.remove('userdata');
  }, []);

  const handleChangePage = useCallback(() => {
    isLoading(true);
  }, [isLoading]);

  return (
    <Container page={page}>
      <div>
        <img
          src={`/icons/logo-icon-${theme.mode}-mode.svg`}
          alt="Logo move.on"
        />
      </div>

      <div>
        <Link href="/dashboard">
          <button
            disabled={page === 'dashboard' && true}
            className={page === 'dashboard' && 'active'}
            type="button"
            onClick={handleChangePage}
          >
            <FiHome
              size={25}
              style={
                page === 'dashboard'
                  ? { color: 'var(--blue)' }
                  : { color: 'var(--text)' }
              }
            />
          </button>
        </Link>

        <Link href="/leaderboard">
          <button
            disabled={page === 'leaderboard' && true}
            className={page === 'leaderboard' && 'active'}
            type="button"
            onClick={handleChangePage}
          >
            <FiAward
              size={25}
              style={
                page === 'leaderboard'
                  ? { color: 'var(--blue)' }
                  : { color: 'var(--text)' }
              }
            />
          </button>
        </Link>
      </div>

      <Link href="/">
        <button type="button" onClick={handleLogout}>
          <FiPower size={25} color="#ff0000" />
        </button>
      </Link>
    </Container>
  );
}
