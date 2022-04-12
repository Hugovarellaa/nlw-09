import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 2rem 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    height: 3rem;
    padding: 0 2rem;
    font-size: 1rem;
    background-color: var(--blue-light);
    color: #fff;
    border: 0;
    border-radius: 0.25rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
