import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -6rem;

  div {
    background-color: var(--shape);
    border-radius: 0.25rem;
    padding: 1rem 2rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        font-size: 1rem;
        line-height: 2rem;
        font-weight: 400;
      }

      img {
        width: 30px;
        height: 30px;
      }
    }
    strong {
      display: block;
      font-size: 1.5rem;
      font-weight: 500;
      font-weight: 3rem;
      margin-top: 1rem;
    }

    &:last-child {
      background-color: var(--green);
      color: #fff;
    }
  }
`;
