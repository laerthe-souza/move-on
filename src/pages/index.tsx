import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';

import { Container, BackgroundImage, Content } from '../styles/pages';

export default function Home(): JSX.Element {
  const { push } = useRouter();

  useEffect(() => {
    const url = window.location.href;

    const hasCode = url.includes('?code=');

    if (hasCode) {
      const [, code] = url.split('?code=');

      axios.post('/api/login', { code }).then(response => {
        console.log(response.data);
      });

      push('/dashboard');
    }
  }, []);

  return (
    <>
      <Head>
        <title>Faça seu login | move.on</title>
      </Head>
      <Container>
        <BackgroundImage />

        <Content>
          <img src="/logo-white.svg" alt="Logo Move.on" />

          <form>
            <strong>Bem-vindo</strong>

            <p>
              <FaGithub size={45} style={{ color: 'var(--text-highlight)' }} />
              Faça login com seu GitHub para começar
            </p>

            <Link
              href={`https://github.com/login/oauth/authorize?scope=user:email&client_id=${process.env.NEXT_PUBLIC_GITHUB_AUTH_CLIENT_ID}`}
            >
              <button type="button">
                <FaGithub size={35} style={{ color: 'var(--white)' }} />
                Login com GitHub
              </button>
            </Link>
          </form>
        </Content>
      </Container>
    </>
  );
}
