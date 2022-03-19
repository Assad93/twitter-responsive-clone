import React from "react";

import { Container, Item, Title } from "./styles";

interface Props {
  title: string;
  elements: React.ReactNode[];
}

const List: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <Item>
        <Title>{props.title}</Title>
      </Item>

      {props.elements.map((element, index) => {
        return <Item key={index}>{element}</Item>;
      })}
    </Container>
  );
};

export default List;
