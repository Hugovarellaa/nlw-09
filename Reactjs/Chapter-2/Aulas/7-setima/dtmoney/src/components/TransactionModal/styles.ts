import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    font-size: 2rem;
    line-height: 3rem;
    color: var(--text-title);
    font-weight: 500;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    height: 4rem;
    padding: 1rem 2rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    border-radius: 0.25rem;

    & + input {
      margin-top: 1rem;
    }
    &::placeholder {
      font-size: 1rem;
      line-height: 2rem;
      color: var(--text-body);
      font-weight: 400;
    }
  }

  button[type="submit"] {
    width: 100%;
    background: var(--green);
    height: 4rem;
    border: 0;
    border-radius: 0.25rem;
    color: #fff;
    font-size: 1rem;
    line-height: 2rem;
    font-weight: 600;
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

interface Props {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  red: "#E52E4D",
  green: "#33CC95",
};

export const RadioBox = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  transition: border-color 0.2s;

  background: ${(props) =>
    props.isActive
      ? transparentize(0.8, colors[props.activeColor])
      : "transaparent"};

  img {
    width: 30px;
    height: 30px;
  }

  span {
    font-size: 1rem;
    line-height: 2rem;
    margin-left: 1rem;
    color: var(--text-title);
    font-weight: 400;
  }

  &:hover {
    border-color: ${darken(0.3, "#d7d7d7")};
  }
`;
