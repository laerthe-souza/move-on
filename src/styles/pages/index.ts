import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${props =>
    props.theme.mode === 'light' ? 'var(--blue)' : '#111'};
`;

export const BackgroundImage = styled.div`
  background: url('/icons/bg-icon-${({ theme }) => theme.mode}-mode.svg')
    no-repeat center;
  background-position: 50% 50%;
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
      color: var(--white);
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
      background-color: ${props =>
        props.theme.mode === 'light' ? 'var(--blue-dark)' : 'var(--green)'};
      color: ${props =>
        props.theme.mode === 'light' ? 'var(--white)' : '#000'};
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      font-weight: 600;
      transition: background-color 0.4s;

      &:hover {
        background-color: ${props =>
          props.theme.mode === 'light' ? 'var(--green)' : '#000'};
        color: #fff;

        svg {
          color: #fff;
        }
      }

      svg {
        margin-right: 2rem;
        color: ${props =>
          props.theme.mode === 'light' ? 'var(--white)' : '#000'};
      }
    }
  }
`;
