import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  div {
    margin-left: 20px;

    strong {
      font-size: 2.2rem;
      font-weight: 600;
      color: var(--title);
    }

    p {
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      margin-top: 5px;

      img {
        margin-right: 5px;
      }
    }
  }
`;
