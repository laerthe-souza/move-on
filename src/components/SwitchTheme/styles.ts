import styled, { css } from 'styled-components';

interface ContainerProps {
  themeMode: 'light' | 'dark';
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  top: 5%;
  right: 2.2%;
  width: 45px;
  height: 15px;
  background-color: ${props =>
    props.theme.mode === 'light' ? 'var(--white)' : '#000'};
  border-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    position: absolute;
    left: -6%;
    ${props =>
      props.themeMode === 'dark' &&
      css`
        transform: translateX(100%);
      `};
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${props =>
      props.theme.mode === 'light' ? ' var(--blue-dark)' : ' var(--green)'};
    transition: transform 0.4s;
  }
`;
