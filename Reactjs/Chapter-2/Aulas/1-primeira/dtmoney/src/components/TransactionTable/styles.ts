import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  max-width: 1120px;
  width: 100%;

  table {
    border-spacing: 0 0.5rem;
    width: 100%;

    th {
      color: var(--text-body);
      font-size: 1rem;
      font-weight: 400;
      text-align: left;
      padding: 1rem 2rem;
    }

    td {
      background-color: var(--shape);
      padding: 1rem 2rem;
      border-radius: 0.25rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 2rem;
      color: var(--text-body);

      &:first-child {
        color: var(--text-title);
      }
      &.deposit {
        color: var(--green);
      }
      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
