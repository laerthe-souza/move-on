import styled from 'styled-components';

interface ContainerProps {
  isLoading: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${props => (props.isLoading ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;
