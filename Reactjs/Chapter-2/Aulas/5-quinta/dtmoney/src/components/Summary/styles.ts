import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7rem;

  div {
    background: var(--shape);
    padding: 1rem 2rem;
    border-radius: 0.25rem;
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
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
      margin-top: 1rem;
    }

    &:last-child {
      background: var(--green);
      color: #fff;
    }
  }
`;
