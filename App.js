// import { StatusBar } from "expo-status-bar";
import React from "react";
import { SignUp } from "./src/pages/SignUp";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import {
  Lato_400Regular,
  Lato_300Light,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/theme";
import { Sign } from "./src/layout/Sign";

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_300Light,
    Lato_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="transparent"
        />
        <Sign>
          <SignUp />
        </Sign>
      </ThemeProvider>
    </>
  );
}
