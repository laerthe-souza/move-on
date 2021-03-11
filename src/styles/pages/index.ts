import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${props =>
    props.theme.mode === 'light' ? 'var(--blue)' : '#111'};
`;

export const BackgroundImage = styled.div`
  ${props =>
    props.theme.mode === 'light'
      ? css`
          background: url('/icons/bg-icon-light-mode.svg') no-repeat center;
        `
      : css`
          background: url('/icons/bg-icon-dark-mode.svg') no-repeat center;
        `}
  background-size: contain;
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
      color: ${props =>
        props.theme.mode === 'light' ? 'var(--white)' : '#fff'};
    }

    p {
      display: flex;
      align-items: center;
      max-width: 300px;
      font-size: 2rem;
      font-weight: 500;
      line-height: 1.6;
      color: ${props =>
        props.theme.mode === 'light' ? 'var(--text-highlight)' : '#fff'};
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
      transition: 0.4s;

      &:hover {
        background-color: ${props =>
          props.theme.mode === 'light' ? 'var(--green)' : '#000'};
        color: ${props => props.theme.mode === 'dark' && '#fff'};
        transition: 0.4s;
      }

      svg {
        margin-right: 2rem;
      }
    }
  }
`;
