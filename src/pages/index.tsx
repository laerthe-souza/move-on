import axios from 'axios';
import Cookies from 'js-cookie';
import Head from 'next/head';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { useLoading } from '../hooks/useLoading';

import { Container, BackgroundImage, Content } from '../styles/pages';
import SwitchTheme from '../components/SwitchTheme';
import { useSwitchTheme } from '../hooks/useSwitchTheme';

interface UserData {
  name: string;
  username: string;
  avatarUrl: string;
  level: number;
  currentExperience: number;
  totalExperience: number;
  challengesCompleted: number;
}

export default function Home(): JSX.Element {
  const { push } = useRouter();

  const { isLoading } = useLoading();
  const { theme } = useSwitchTheme();

  useEffect(() => {
    const url = window.location.href;

    const hasCode = url.includes('?code=');

    if (hasCode) {
      isLoading(true);

      const [, code] = url.split('?code=');

      axios.post('/api/login', { code }).then(response => {
        const gitUserdata = response.data as UserData;

        Cookies.defaults.expires = 1;
        Cookies.set('userdata', JSON.stringify(gitUserdata));

        push('/dashboard');
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Faça seu login | move.on</title>
      </Head>
      <Container>
        <SwitchTheme />

        <BackgroundImage />

        <Content>
          <img src={`/logo-${theme.mode}-mode.svg`} alt="Logo move.on" />

          <form>
            <strong>Bem-vindo</strong>

            <p>
              <FaGithub
                size={45}
                style={
                  theme.mode === 'light'
                    ? { color: 'var(--text-highlight)' }
                    : { color: '#fff' }
                }
              />
              Faça login com seu GitHub para começar
            </p>

            <Link
              href={`https://github.com/login/oauth/authorize?scope=user:email&client_id=${process.env.NEXT_PUBLIC_GITHUB_AUTH_CLIENT_ID}`}
            >
              <button
                type="button"
                onClick={() => {
                  isLoading(true);
                }}
              >
                <FaGithub size={35} />
                Login com GitHub
              </button>
            </Link>
          </form>
        </Content>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { userdata } = context.req.cookies;

  if (userdata) {
    return {
      props: {},
      redirect: {
        destination: '/dashboard',
      },
    };
  }

  return {
    props: {},
  };
};
