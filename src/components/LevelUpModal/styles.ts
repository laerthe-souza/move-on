import styled from 'styled-components';
import { shade } from 'polished';

export const Overlay = styled.div`
  background-color: ${props =>
    props.theme.mode === 'light'
      ? 'rgba(242, 243, 245, 0.8)'
      : 'rgba(0, 0, 0, 0.7)'};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    background-color: ${props =>
      props.theme.mode === 'light' ? 'var(--white)' : '#111'};
    width: 100%;
    max-width: 40rem;
    padding: 1.5rem 2rem;
    border-radius: 5px;
    box-shadow: ${props =>
      props.theme.mode === 'light' && '0 0 60px rgba(0, 0, 0, 0.5)'};
    text-align: center;
    position: relative;

    header {
      font-size: 13rem;
      font-weight: 600;
      color: var(--blue);
      background: url('/icons/levelup.svg') no-repeat center;
      background-size: contain;
    }

    strong {
      font-size: 3rem;
      color: var(--title);
    }

    p {
      font-size: 1.7rem;
      color: var(--text);
      margin-top: 0.75rem;
      margin-bottom: 8.5rem;
    }

    button:first-child {
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
      background: 0;
      border: 0;
      font-size: 0;
    }

    a {
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--blue-twitter-light);
      border-top: 1px solid var(--gray-line);
      color: var(--blue-twitter);
      font-size: 1.8rem;
      font-weight: 600;
      transition: all 0.4s;
      border-radius: 0 0 5px 5px;

      &:hover {
        background-color: ${props =>
          props.theme.mode === 'light'
            ? 'var(--blue-twitter)'
            : `${shade(0.2, '#2aa9e0')}`};
        color: #fff;

        svg {
          color: #fff;
        }
      }

      svg {
        margin-left: 2rem;
        color: var(--blue-twitter);
        transition: color 0.4s;
      }
    }
  }
`;
