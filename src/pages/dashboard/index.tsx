import Head from 'next/head';

import { Container } from '../../styles/pages/dashboard';

export default function Dashboard(): JSX.Element {
  return (
    <>
      <Head>
        <title>Dashboard | move.on</title>
      </Head>
      <Container>
        <h1>Dashboard</h1>
      </Container>
    </>
  );
}
