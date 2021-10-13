import React from "react";
import { StyledView, ScrollPage } from "./style";
import { MainLayout } from "../../../pages/Main";
import { Header } from "../../../components/Header";
export const Main = () => {
  return (
    <StyledView>
      <Header home={true} background={true} />
      <ScrollPage>
        <MainLayout />
      </ScrollPage>
    </StyledView>
  );
};
