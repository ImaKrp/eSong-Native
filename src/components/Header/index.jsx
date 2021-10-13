import React, { useState } from "react";
import {
  HeaderWrapper,
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
import Home from "../../../assets/icons/home.png";
import HomeActive from "../../../assets/icons/homeActive.png";
import arrow from "../../../assets/icons/arrow.png";
import userImg from "../../../assets/icons/user.png";
import { useNavigation } from "@react-navigation/native";
import { useSession } from "../../hooks/useSession";

export const Header = (props) => {
  const [active, setActive] = useState(false);
  const navigation = useNavigation();
  const { session, LogOut } = useSession();

  function goToMain() {
    setActive(false);
    navigation.navigate("Main");
  }
  function goToProfile() {
    setActive(false);
    navigation.navigate("Profile");
  }

  return (
    <>
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
          {props.profile !== true && (
            <RedirectBtn>
              <RedirectText activeOpacity={0.7} onPress={() =>
              props.toProfile ? (props.toProfile(), setActive(false)) : goToProfile()
            }>
                Perfil
              </RedirectText>
            </RedirectBtn>
          )}
          <RedirectBtn>
            <RedirectText activeOpacity={0.7} onPress={() => LogOut()}>
              Sair
            </RedirectText>
          </RedirectBtn>
        </Modal>
      )}
      {active === true && <DisableModal onPress={() => setActive(!active)} />}
      <HeaderWrapper background={props.background}>
        {props.home !== true ? (
          <HomeButton
            activeOpacity={0.7}
            onPress={() =>
              props.toMain ? (props.toMain(), setActive(false)) : goToMain()
            }
          >
            <HomeImg source={Home} />
          </HomeButton>
        ) : (
          <HomeButton activeOpacity={0.7}>
            <HomeImg source={HomeActive} />
          </HomeButton>
        )}
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
              <MiniUser source={userImg} />
            )}
            <Username>{session.name}</Username>
            <Arrow source={arrow} active={active} />
          </CollapseButton>
        </Container>
      </HeaderWrapper>
    </>
  );
};
