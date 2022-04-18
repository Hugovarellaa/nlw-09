import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      font-size: 1rem;
      line-height: 2rem;
      font-weight: 400;
      padding: 1rem 2rem;
      color: var(--text-body);
      text-align: left;
    }

    td {
      padding: 1rem 2rem;
      font-size: 1rem;
      line-height: 2rem;
      font-weight: 400;
      color: var(--text-body);
      background: var(--shape);
      border-radius: 0.25rem;

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
