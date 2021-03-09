import styled, { keyframes } from 'styled-components';

interface CountdownButtonProps {
  countdown?: number;
}

export const Container = styled.div`
  margin-top: 5rem;

  > div {
    display: flex;
    align-items: center;
    font-family: 'Rajdhani';
    font-weight: 600;
    color: var(--title);

    > span {
      font-size: 10rem;
      margin: 0 0.5rem;
    }
  }
`;

export const Timer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--white);
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  font-size: 13rem;
  text-align: center;

  span {
    flex: 1;

    &:first-child {
      border-right: 1px solid #f0f1f3;
    }

    &:last-child {
      border-left: 1px solid #f0f1f3;
    }
  }
`;

const progressButton = keyframes`
  0% { width: 0% }
  100% { width: 100% }
`;

export const CountdownButton = styled.button<CountdownButtonProps>`
  position: relative;
  width: 100%;
  height: 8rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 5px;
  background-color: var(--blue);
  color: var(--white);
  font-size: 2rem;
  font-weight: 600;
  transition: background-color 0.4s;

  svg {
    margin-bottom: -2px;
    margin-left: 10px;
    color: var(--text);
  }

  &.active {
    background-color: var(--white);
    color: var(--text);
  }

  &.finished {
    border-bottom: 6px solid #4cd62b;
    background-color: var(--white);
    color: var(--text);
    cursor: not-allowed;
  }

  &:not(.finished):hover {
    background-color: var(--blue-dark);
  }

  &.active:hover {
    background-color: var(--red);
    color: var(--white);

    svg {
      color: var(--white);
    }
  }

  &.active::before {
    content: '';
    width: 0;
    height: 6px;
    position: absolute;
    background-color: #4cd62b;
    bottom: 0;
    left: 0;
    border-radius: 0 0 5px 5px;
    animation-name: ${progressButton};
    animation-duration: ${props => props.countdown}s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }
`;
