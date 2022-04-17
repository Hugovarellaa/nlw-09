import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    margin-bottom: 2rem;
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 500;
    color: var(--text-title);
  }

  input {
    width: 100%;
    padding: 1rem 2rem;
    height: 4rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    & + input {
      margin-top: 1rem;
    }

    *::placeholder {
      color: var(--text-body);
      font-size: 1rem;
      font-weight: 400;
      line-height: 2rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    background: var(--green);
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    border: 0;
    border-radius: 0.25rem;
    margin-top: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Content = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  activeColor: "red" | "green";
  isActive: boolean;
}

const colors = {
  red: "#E52E4D",
  green: "#33CC95",
};

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;

  background: ${(props) =>
    props.isActive
      ? transparentize(0.7, colors[props.activeColor])
      : "transarent"};
  border: 1px solid #d7d7d7;
  transition: border-color 0.2s;

  img {
    width: 30px;
    height: 30px;
    margin-right: 1rem;
  }

  span {
    color: var(--text-title);
    font-size: 1rem;
    line-height: 2rem;
    font-weight: 400;
  }
  &:hover {
    border-color: ${darken(0.2, "#d7d7d7")};
  }
`;
