import styled from "styled-components";

export const Container = styled.div`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 2rem 8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: 0;
    border-radius: 0.25rem;
    background: var(--blue-light);
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    padding: 0 2rem;
    height: 3rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
