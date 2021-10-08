import React, { useState } from "react";
import {
  StyledView,
  Header,
  HeaderText,
  HeaderImage,
  ScrollPage,
} from "./style";
import eSongLogo from "../../../assets/logo512.png";

export const Sign = (props) => {
  return (
    <StyledView>
      <Header>
        <HeaderImage source={eSongLogo} />
        <HeaderText>eSong</HeaderText>
      </Header>
      <ScrollPage>{props.children}</ScrollPage>
    </StyledView>
  );
};
