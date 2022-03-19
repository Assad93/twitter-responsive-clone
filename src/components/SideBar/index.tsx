import React from "react";
import FollowSuggestion from "../FollowSuggestion";
import List from "../List";
import News from "../News";

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from "./styles";

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <List
          title="Talvez você curta"
          elements={[
            <FollowSuggestion name="Samuca Salim" nickname="@samuca_salim" />,
            <FollowSuggestion name="Samuca Salim" nickname="@samuca_salim" />,
            <FollowSuggestion name="Samuca Salim" nickname="@samuca_salim" />,
            <FollowSuggestion name="Samuca Salim" nickname="@samuca_salim" />,
          ]}
        />

        <List
          title="O que está acontecendo"
          elements={[
            <News
              status="Assuntos mais comentados no Brasil"
              title="Bootcamp de React Js"
            />,
            <News
              status="Assuntos mais comentados no Brasil"
              title="Bootcamp de React Js"
            />,
            <News
              status="Assuntos mais comentados no Brasil"
              title="Bootcamp de React Js"
            />,
            <News
              status="Assuntos mais comentados no Brasil"
              title="Bootcamp de React Js"
            />,
          ]}
        />
      </Body>
    </Container>
  );
};

export default SideBar;
