import React from "react";
import Button from "../Button";

import {
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  LikeIcon,
  ProfileIcon,
  BotSide,
  Avatar,
  ProfileData,
  ExitIcon,
} from "./styles";

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <LikeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <Button>
          <span>Twettar</span>
        </Button>
      </TopSide>

      <BotSide>
        <Avatar src="https://github.com/Assad93.png" />

        <ProfileData>
          <strong>Samir Salim</strong>
          <span>@samir_salim</span>
        </ProfileData>

        <ExitIcon />
      </BotSide>
    </Container>
  );
};

export default MenuBar;
