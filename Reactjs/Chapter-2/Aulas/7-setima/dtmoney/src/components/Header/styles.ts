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
    padding: 0 2rem;
    height: 3rem;
    color: #fff;
    font-size: 1rem;
    line-height: 2rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
