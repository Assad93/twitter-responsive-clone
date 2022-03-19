import React from "react";
import {
  Avatar,
  Banner,
  CakeIcon,
  Container,
  EditButton,
  Followage,
  LocationIcon,
  ProfileData,
} from "./styles";

import Feed from "../Feed";

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar src="https://github.com/Assad93.png" />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Samir Assad</h1>
        <h2>@assad_93</h2>

        <p>
          Developer at <a href="#">@PocaCursos</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Campos dos Goytacazes, RJ
          </li>
          <li>
            <CakeIcon />
            Nascido em 13 de Dezembro de 1993
          </li>
        </ul>
        <Followage>
          <span>
            <strong>50</strong> seguindo
          </span>
          <span>
            <strong>500</strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
