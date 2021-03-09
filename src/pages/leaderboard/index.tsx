import { useEffect } from 'react';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import Profile from '../../components/Profile';
import SideBar from '../../components/SideBar';
import { useLoading } from '../../hooks/useLoading';

import { Container, Ranking } from '../../styles/pages/leaderboard';

interface UserData {
  name: string;
  username: string;
  avatarUrl: string;
  level: number;
  totalExperience: number;
  challengesCompleted: number;
}

interface LeaderboardProps {
  users: UserData[];
}

export default function Leaderboard({ users }: LeaderboardProps): JSX.Element {
  const { isLoading } = useLoading();

  useEffect(() => {
    isLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Leaderboard | move.on</title>
      </Head>

      <Container>
        <SideBar page="leaderboard" />

        <header>Leaderboard</header>

        <Ranking>
          <thead>
            <tr>
              <th>POSIÇÃO</th>
              <th>USUÁRIO</th>
              <th>DESAFIOS</th>
              <th>EXPERIÊNCIA</th>
            </tr>
          </thead>
          {users.map((user, index) => (
            <tbody key={user.username}>
              <tr>
                <td>{index + 1}</td>
                <td>
                  <Profile
                    name={user.name || user.username}
                    avatarUrl={user.avatarUrl}
                    level={user.level}
                  />
                </td>
                <td>
                  <strong>{user.challengesCompleted}</strong> completados
                </td>
                <td>
                  <strong>{user.totalExperience}</strong> xp
                </td>
              </tr>
            </tbody>
          ))}
        </Ranking>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { userdata } = context.req.cookies;

  if (!userdata) {
    return {
      props: {},
      redirect: {
        destination: '/',
      },
    };
  }

  const response = await axios.post(`${process.env.APP_URL}/api/ranking`);

  return {
    props: {
      users: response.data,
    },
  };
};
