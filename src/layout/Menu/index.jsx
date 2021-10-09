import React, { useState } from "react";
import {
  StyledView,
  Header,
  ScrollPage,
  HomeButton,
  HomeImg,
  CollapseButton,
  User,
  Username,
  Arrow,
} from "./style";
import Home from "../../../assets/icons/home.png";
import arrow from "../../../assets/icons/arrow.png";

export const Menu = (props) => {
  const [active, setActive] = useState(false);
  return (
    <StyledView>
      <Header>
        <HomeButton activeOpacity={0.7}>
          <HomeImg source={Home} />
        </HomeButton>
        <CollapseButton onPress={() => setActive(!active)} activeOpacity={0.7}>
          <User
            source={{
              uri: "https://64.media.tumblr.com/7031561507aa20b65087c7812ace806c/ea95d609d48498c5-e5/s2048x3072/e948e9677edaa3caed15be26dff8d21b11624546.jpg",
            }}
          />
          <Username>Teste</Username>
          <Arrow source={arrow} active={active} />
        </CollapseButton>
      </Header>
      <ScrollPage>{props.children}</ScrollPage>
    </StyledView>
  );
};
