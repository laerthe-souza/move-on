import { motion } from 'framer-motion';
import styled from 'styled-components';

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
`;

export const SettingsModal = styled(motion.div)`
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

  hr {
    height: 2.5px;
    margin: 1rem 0 2rem;
    background-color: var(--gray-line);
    color: var(--gray-line);
  }

  strong {
    font-size: 3rem;
    color: var(--title);
  }

  p {
    position: relative;
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--text);
    margin-top: 0.75rem;
    margin-bottom: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    select {
      font-size: 1.8rem;
      font-weight: 600;
      height: 3.5rem;
      padding: 0 2rem;
      border: 0;
      background-color: ${props =>
        props.theme.mode === 'light' ? 'var(--gray-line)' : 'var(--white)'};
      color: ${props =>
        props.theme.mode === 'light' ? 'var(--title)' : 'var(--title)'};
      border-radius: 5px;
    }

    &:nth-child(4) {
      margin-bottom: 7rem;
    }
  }

  > div {
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr;
    bottom: 0;
    right: 0;
    left: 0;
    border-top: 1px solid var(--gray-line);

    button {
      height: 6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      font-size: 1.5rem;
      font-weight: 600;
      transition: ${props =>
          props.theme.mode === 'light' ? 'background-color' : 'color'}
        0.4s;

      &.closeButton {
        background-color: ${props =>
          props.theme.mode === 'light' ? '#fff5f5' : 'var(--red)'};
        color: ${props =>
          props.theme.mode === 'light' ? 'var(--red)' : '#fff'};
        border-radius: 0 0 0 5px;

        &:hover {
          background-color: var(--red);
          color: var(--white);
        }
      }

      &.saveButton {
        background-color: ${props =>
          props.theme.mode === 'light' ? '#f7fff5' : 'var(--green)'};
        color: ${props =>
          props.theme.mode === 'light' ? 'var(--green)' : '#fff'};
        border-left: 1px solid var(--gray-line);
        border-radius: 0 0 5px 0;

        &:hover {
          background-color: var(--green);
          color: var(--white);
        }
      }
    }
  }
`;
