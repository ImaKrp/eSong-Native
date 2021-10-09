// import { StatusBar } from "expo-status-bar";
import React from "react";
import { Main } from "./src/pages/Menu/Main";
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
import { Menu } from "./src/layout/Menu";
// import { SessionProvider } from "./src/provider/Contexts/SessionContext.js";
import { SongProvider } from "./src/provider/Contexts/SongContext.js";
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
      {/* <SessionProvider> */}
        <SongProvider>
          <ThemeProvider theme={theme}>
            <StatusBar
              translucent
              barStyle="light-content"
              backgroundColor="transparent"
            />
            <Menu>
              <Main />
            </Menu>
          </ThemeProvider>
        </SongProvider>
      {/* </SessionProvider> */}
    </>
  );
}
