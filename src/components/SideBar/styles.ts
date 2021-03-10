import styled from 'styled-components';

interface ContainerProps {
  page: string;
}

export const Container = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: var(--white);
  box-shadow: ${props =>
    props.theme.mode === 'light' && '0 0 60px rgba(0, 0, 0, 0.2)'};
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div:first-child,
  > button {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;

    button {
      position: relative;
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: 0;
      border: 0;

      &:disabled {
        cursor: initial;
      }

      &.active:before {
        position: absolute;
        left: 0;
        content: '';
        width: 4px;
        height: 100%;
        border-radius: 0 5px 5px 0;
        background-color: var(--blue);
        transition: 1s;
      }
    }
  }
`;
