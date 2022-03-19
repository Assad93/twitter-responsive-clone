import React from "react";

import { Container } from "./styles";

interface Props {
  status: string;
  title: string;
}

const News: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <span>{props.status}</span>
      <strong>{props.title}</strong>
    </Container>
  );
};

export default News;
