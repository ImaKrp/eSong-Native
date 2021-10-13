import React from "react";
import { StyledView, ScrollPage } from "./style";
import { ProfileLayout } from "../../../pages/Profile";
import { Header } from "../../../components/Header";
export const Profile = () => {
  return (
    <StyledView>
      <Header profile={true} background={true} />
      <ProfileLayout />
    </StyledView>
  );
};
