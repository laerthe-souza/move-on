import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100%;
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.2);
  padding: 2.5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const InactiveChallengeBox = styled.div`
  max-width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 2.3rem;
    font-weight: 500;
    line-height: 1.4;
    text-align: center;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    font-size: 1.6rem;
    margin-top: 5rem;

    img {
      margin-bottom: 3rem;
    }
  }
`;

export const PreparingChallengeBox = styled.div`
  max-width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;

  strong {
    font-size: 2.3rem;
    font-weight: 500;
    line-height: 1.4;
    text-align: center;
  }

  p {
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: 1.4;
    font-size: 1.6rem;
    margin-top: 5rem;

    img {
      margin-right: 2rem;
      width: 3.2rem;
      height: 4.37rem;
    }
  }
`;

export const ActiveChallengeBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  header {
    color: var(--blue);
    font-size: 1.9rem;
    font-weight: 600;
    padding: 0 2.5rem 2rem;
    border-bottom: 1px solid var(--gray-line);
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      font-size: 3rem;
      font-weight: 600;
      color: var(--title);
      margin: 3rem 0 2rem;
    }

    p {
      font-size: 1.5rem;
      line-height: 1.5;
    }
  }

  footer {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-top: 1px solid var(--gray-line);

    button {
      height: 6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      font-size: 1.5rem;
      font-weight: 600;
      transition: background-color 0.4s;

      &.failedButton {
        background-color: #fff5f5;
        color: var(--red);
        border-radius: 0 0 0 5px;

        &:hover {
          background-color: var(--red);
          color: var(--white);
        }
      }

      &.succeededButton {
        background-color: #f7fff5;
        color: var(--green);
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
