import React, { useEffect, useCallback, useState } from "react";
import {
  FullView,
  Wrapper,
  ProfileInfo,
  Content,
  MenuBtn,
  MenuText,
  ProfileImage,
  ImageDiv,
  Column,
  Username,
} from "./style";
import { useSession } from "../../hooks/useSession";
import { useNavigation } from "@react-navigation/native";
import userImg from "../../../assets/icons/user.png";
import { Modal } from "../../components/Modal";

export const ProfileLayout = () => {
  const { session } = useSession();
  const [active, setActive] = useState(false);
  const navigation = useNavigation();

  function goToMain() {
    navigation.navigate("Main");
  }
  return (
    <>
      {active === true && <Modal onClick={() => setActive(false)} />}
      <FullView>
        <Wrapper>
          <ImageDiv
            activeOpacity={0.7}
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
            onPress={() => setActive(!active)}
          >
            {session.pic ? (
              <ProfileImage source={{ uri: session.pic }} />
            ) : (
              <ProfileImage size="65%" source={userImg} />
            )}
          </ImageDiv>
          <Column activeOpacity={0.7} onPress={() => setActive(!active)}>
            <ProfileInfo>PERFIL</ProfileInfo>
            <Username numberOfLines={1}>{session.name}</Username>
          </Column>
        </Wrapper>
        <Content>
          <MenuBtn onPress={goToMain}>
            <MenuText>SUAS MÚSICAS</MenuText>
          </MenuBtn>
        </Content>
      </FullView>
    </>
  );
};
