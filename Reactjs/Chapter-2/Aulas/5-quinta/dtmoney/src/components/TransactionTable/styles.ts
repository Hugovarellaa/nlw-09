import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      padding: 1rem 2rem;
      color: var(--text-body);
      font-size: 1rem;
      font-weight: 400;
      line-height: 2rem;
      text-align: left;
    }

    td {
      padding: 1rem 2rem;
      background: var(--shape);
      border-radius: 0.25rem;
      color: var(--text-body);
      line-height: 2rem;

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
