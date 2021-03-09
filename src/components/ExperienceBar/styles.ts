import styled from 'styled-components';

interface ExperienceProps {
  progress: number;
}

export const Container = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1.5rem;
  }
`;

export const Experience = styled.div<ExperienceProps>`
  position: relative;
  flex: 1;
  height: 5px;
  background-color: var(--gray-line);
  border-radius: 5px;
  margin: 0 10px;

  div {
    width: ${props => props.progress}%;
    height: 5px;
    border-radius: 5px;
    background-color: var(--green);
    transition: width 0.8s;

    span {
      top: 15px;
      position: absolute;
      left: ${props => props.progress}%;
      transform: translateX(-50%);
      transition: left 0.8s;
    }
  }
`;
