import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
`;

export const Content = styled.main`
  max-width: 96.2rem;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3.5rem 0;

  > main {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 9rem;
    align-content: center;
  }
`;

export const SettingsButton = styled.button`
  position: absolute;
  top: 4%;
  right: 2%;
  display: flex;
  align-items: center;

  svg {
    color: var(--blue);
    transition: all 0.4s;
  }

  &:hover {
    svg {
      transform: rotateZ(180deg);
      size: 50;
    }
  }
`;
