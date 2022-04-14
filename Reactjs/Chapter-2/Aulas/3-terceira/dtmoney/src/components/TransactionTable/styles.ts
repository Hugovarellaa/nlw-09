import styled from "styled-components";

export const Container = styled.form`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      padding: 1rem 2rem;
      font-size: 1rem;
      font-weight: 400;
      color: var(--text-body);
      text-align: left;
    }

    td {
      background-color: var(--shape);
      border-radius: 0.25rem;
      padding: 1rem 2rem;
      font-size: 1rem;
      font-weight: 400;
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
