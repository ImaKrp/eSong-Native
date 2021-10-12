import React, { useState } from "react";
import {
  Wrapper,
  Img,
  Artist,
  ImgDiv,
  SongName,
  PlayBtn,
  PlayImg,
} from "./style";
import { useNavigation } from "@react-navigation/native";
import play from "../../../assets/icons/play.png";

export const Card = (props) => {
  const navigation = useNavigation();

  function goToPlayer() {
    navigation.navigate("Player", {
      id: props.index,
      type: props.type
    });
  }

  return (
    <Wrapper>
      <ImgDiv>
        <Img source={{ uri: props?.image }} />
        <PlayBtn activeOpacity={0.7} onPress={goToPlayer}>
          <PlayImg source={play} />
        </PlayBtn>
      </ImgDiv>
      <SongName numberOfLines={1}>{props?.name}</SongName>
      <Artist numberOfLines={1}>{props?.artist}</Artist>
    </Wrapper>
  );
};
