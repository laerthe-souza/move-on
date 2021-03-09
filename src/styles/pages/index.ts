import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--blue);
`;

export const BackgroundImage = styled.div`
  background: url('/icons/background-icon.svg') no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  height: 100vh;
  flex: 1;
`;

export const Content = styled.main`
  max-width: 600px;
  width: 100%;
  padding: 0 10rem;

  display: flex;
  flex-direction: column;

  img {
    width: 32rem;
    margin-bottom: 12rem;
  }

  form {
    strong {
      font-size: 3.6rem;
      font-weight: 600;
      color: var(--white);
    }

    p {
      display: flex;
      align-items: center;
      max-width: 300px;
      font-size: 2rem;
      font-weight: 500;
      line-height: 1.6;
      color: var(--text-highlight);
      margin: 4rem 0;

      svg {
        margin-right: 1rem;
      }
    }

    button {
      height: 6rem;
      width: 100%;
      background-color: var(--blue-dark);
      color: var(--white);
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      font-weight: 600;
      transition: background-color 0.4s;

      &:hover {
        background-color: var(--green);
      }

      svg {
        margin-right: 2rem;
      }
    }
  }
`;
