import React, { useState } from "react";
import { StyledView } from "./style";
import { PlayerLayout } from "../../../pages/Player";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { Header } from "../../../components/Header";

export const Player = () => {
  const [changed, setChanged] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const { id, type } = route.params;

  function goToMain() {
    setChanged(true);
    navigation.navigate("Main");
  }
  function goToProfile() {
    setChanged(true);
    navigation.navigate("Profile");
  }

  return (
    <StyledView>
      <Header background={false} toMain={goToMain} toProfile={goToProfile} />
      <PlayerLayout songId={id} changed={changed} type={type} />
    </StyledView>
  );
};
