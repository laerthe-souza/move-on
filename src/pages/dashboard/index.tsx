import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { MdSettings } from 'react-icons/md';

import ChallengesBox from '../../components/ChallengesBox';
import CompletedChallegnes from '../../components/CompletedChallenges';
import Countdown from '../../components/Countdown';
import ExperienceBar from '../../components/ExperienceBar';
import Profile from '../../components/Profile';
import SideBar from '../../components/SideBar';
import ChallengesProvider from '../../hooks/useChallenges';
import CountdownProvider from '../../hooks/useCountdown';
import { useLoading } from '../../hooks/useLoading';
import { useSettings } from '../../hooks/useSettings';

import {
  Container,
  Content,
  SettingsButton,
} from '../../styles/pages/dashboard';

interface UserData {
  name: string;
  username: string;
  avatarUrl: string;
  level: number;
  currentExperience: number;
  totalExperience: number;
  challengesCompleted: number;
}

interface DashboardProps {
  userdata: UserData;
}

export default function Dashboard({ userdata }: DashboardProps): JSX.Element {
  const { isLoading } = useLoading();
  const { showModalSettings } = useSettings();

  useEffect(() => {
    Notification.requestPermission();

    isLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard | move.on</title>
      </Head>

      <ChallengesProvider
        level={userdata.level}
        currentExperience={userdata.currentExperience}
        totalExperience={userdata.totalExperience}
        challengesCompleted={userdata.challengesCompleted}
      >
        <Container>
          <SideBar page="dashboard" />

          <CountdownProvider>
            <Content>
              <ExperienceBar />

              <main>
                <section>
                  <Profile
                    name={userdata.name || userdata.username}
                    avatarUrl={userdata.avatarUrl}
                  />

                  <CompletedChallegnes />

                  <Countdown />
                </section>

                <section>
                  <ChallengesBox />
                </section>
              </main>
            </Content>
          </CountdownProvider>

          <SettingsButton onClick={showModalSettings}>
            <MdSettings size={35} />
          </SettingsButton>
        </Container>
      </ChallengesProvider>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { userdata } = context.req.cookies;

  if (userdata) {
    return {
      props: {
        userdata: JSON.parse(userdata),
      },
    };
  }

  return {
    props: {},
    redirect: {
      destination: '/',
    },
  };
};
