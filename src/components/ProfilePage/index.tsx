import React from 'react';

import { 
    Container, 
    Banner, 
    Avatar, 
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
            <Avatar />
          </Banner>
          <ProfileData>
             <EditButton outlined>Editar perfil</EditButton>
          <h1>Edvaldo Jr</h1>
          <h2>@edonejunior</h2>

          <p>
              Estudante de desenvolvimento
          </p>
          <ul>
              <li>
                  <LocationIcon />
                  Bragança Paulista - SP, Brasil
              </li>
              <li>
                  <CakeIcon />
                  Nascido(a) em 19 de maio de 1991
              </li>
          </ul>

            <Followage>
                <span>
                    Seguindo <strong>35</strong>
                </span>
                <span>
                    <strong>88 </strong> seguidores
                </span>
            </Followage>
          </ProfileData>
          
      </Container>
  );
}

export default ProfilePage;