import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    padding: 0 2rem;
    height: 3rem;

    background-color: var(--blue-light);
    border: 0;
    border-radius: 0.25rem;

    font-size: 1rem;
    color: #fff;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
