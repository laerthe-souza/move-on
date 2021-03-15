import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
`;

export const Content = styled.main`
  max-width: 96.2rem;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 3.5rem 0;

  header {
    font-size: 3.6rem;
    font-weight: 600;
    color: var(--title);
    margin-bottom: 4rem;
  }
`;

export const Ranking = styled.table`
  width: 100%;
  text-align: left;
  border-spacing: 0px 10px;

  thead {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--text);

    th {
      padding: 0 20px;

      &:first-child {
        padding: 0;
      }
    }
  }

  tbody {
    height: 20rem;
    overflow-y: auto;
    overflow-x: hidden;
    border-spacing: none;
    background-color: var(--white);

    td > strong {
      color: var(--blue);
    }

    tr {
      transition: transform 0.4s;

      &:hover {
        transform: translateX(10px);
      }
    }

    td {
      padding: 20px;

      &:first-child {
        border-radius: 5px 0 0 5px;
        border-right: 6px solid var(--background);
        text-align: center;
      }

      &:last-child {
        border-radius: 0 5px 5px 0;
      }
    }
  }
`;
