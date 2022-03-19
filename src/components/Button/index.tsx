import styled from "styled-components";

interface ButtonProps {
  outlined?: boolean;
}

export default styled.button<ButtonProps>`
  background: ${(props) => (props.outlined ? "transparent" : "var(--twitter)")};
  color: ${(props) => (props.outlined ? "var(--twitter)" : "var(--white)")};
  border: ${(props) => (props.outlined ? "1px solid var(--twitter)" : "none")};

  padding: 16px;
  border-radius: 25px;

  font-size: 15px;
  font-weight: bold;

  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.outlined
        ? "var(--twitter-dark-hover)"
        : "var(--twitter-light-hover)"};
  }
`;
