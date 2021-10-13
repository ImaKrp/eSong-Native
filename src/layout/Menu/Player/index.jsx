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
  const [hasItLoaded, setHasItLoaded] = useState(false);

  function goToMain() {
    if (!hasItLoaded) return;
    setChanged(true);
    navigation.navigate("Main");
  }
  function goToProfile() {
    if (!hasItLoaded) return;
    setChanged(true);
    navigation.navigate("Profile");
  }
  function hasLoaded() {
    setHasItLoaded(true);
  }

  return (
    <StyledView>
      <Header background={false} toMain={goToMain} toProfile={goToProfile} />
      <PlayerLayout
        songId={id}
        changed={changed}
        type={type}
        hasLoaded={hasLoaded}
      />
    </StyledView>
  );
};
