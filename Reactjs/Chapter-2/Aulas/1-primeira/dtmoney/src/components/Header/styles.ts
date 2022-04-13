import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  width: 100%;
  padding: 2rem 2rem 8rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background-color: var(--blue-light);
    color: #fff;
    border: 0;
    border-radius: 0.25rem;
    padding: 0 2rem;
    height: 3rem;
    font-size: 1rem;
    font-weight: normal;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
