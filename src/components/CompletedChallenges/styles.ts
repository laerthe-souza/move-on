import styled from 'styled-components';

export const Container = styled.div`
  margin: 5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid var(--gray-line);
  font-weight: 500;

  span:first-child {
    font-size: 2rem;
  }

  span:last-child {
    font-size: 2.2rem;
  }
`;
