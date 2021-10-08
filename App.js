// import { StatusBar } from "expo-status-bar";
import React from "react";
import { SignIn } from "./src/pages/SignIn";
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
        <SignIn />
      </ThemeProvider>
    </>
  );
}
