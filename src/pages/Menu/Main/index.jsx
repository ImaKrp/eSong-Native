import React, { useState, useEffect } from "react";
import {
  StyledView,
  Header,
  ScrollPage,
  HomeButton,
  HomeImg,
  CollapseButton,
  User,
  MiniUser,
  Username,
  Arrow,
  DisableModal,
  Container,
  Modal,
  RedirectBtn,
  RedirectText,
} from "./style";
import Home from "../../../../assets/icons/home.png";
import arrow from "../../../../assets/icons/arrow.png";
import userImg from "../../../../assets/icons/user.png";
import { MainLayout } from "../../../layout/Main";
import { useNavigation } from "@react-navigation/native";
import { useSession } from "../../../hooks/useSession";

export const Main = () => {
  const [active, setActive] = useState(false);
  const navigation = useNavigation();
  const { session, LogOut } = useSession();

  function goToMain() {
    navigation.navigate("Main");
  }
  function goToProfile() {
    navigation.navigate("Profile");
  }

  return (
    <StyledView>
      {active === true && (
        <Modal
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,

            elevation: 9,
          }}
        >
          <RedirectBtn>
            <RedirectText activeOpacity={0.7} onPress={goToProfile}>Perfil</RedirectText>
          </RedirectBtn>
          <RedirectBtn>
            <RedirectText activeOpacity={0.7} onPress={() => LogOut()}>
              Sair
            </RedirectText>
          </RedirectBtn>
        </Modal>
      )}
      {active === true && <DisableModal onPress={() => setActive(!active)} />}
      <Header>
        <HomeButton activeOpacity={0.7} onPress={goToMain}>
          <HomeImg source={Home} />
        </HomeButton>
        <Container>
          <CollapseButton
            onPress={() => setActive(!active)}
            activeOpacity={0.7}
          >
            {session.pic ? (
              <User
                source={{
                  uri: session.pic,
                }}
              />
            ) : (
              <MiniUser
                source={userImg}
              />
            )}
            <Username>{session.name}</Username>
            <Arrow source={arrow} active={active} />
          </CollapseButton>
        </Container>
      </Header>
      <ScrollPage>
        <MainLayout />
      </ScrollPage>
    </StyledView>
  );
};
