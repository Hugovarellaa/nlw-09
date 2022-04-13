import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -4rem;

  div {
    background-color: var(--shape);
    border-radius: 0.25rem;
    padding: 1.5rem 2rem;
    font-size: 1rem;
    font-weight: normal;
    line-height: 2rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;

      img {
        width: 30px;
        height: 30px;
      }
    }

    strong {
      font-size: 2rem;
      line-height: 3rem;
      font-weight: 500;
    }

    &:last-child {
      background-color: var(--green);
      color: #fff;
    }
  }
`;
