import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    line-height: 3rem;
    font-weight: 600;
    color: var(--text-title);
  }

  input {
    width: 100%;
    height: 4rem;
    padding: 1rem 2rem;
    background-color: #e7e9ee;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    & + input {
      margin-top: 1rem;
    }

    &::placeholder {
      color: var(--text-body);
      font-size: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    background: var(--green);
    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
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
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  red: "#E52E4D",
  green: "#33CC95",
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #969cb2;

  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : "transparent"};

  &:hover {
    border-color: ${(props) =>
      props.activeColor ? darken(0.3, "#969cb2") : "transparent"};
  }

  img {
    width: 30px;
    height: 30px;
  }

  span {
    margin-left: 1rem;
    font-weight: 400;
    color: var(--text-title);
    font-size: 1rem;
  }
`;
