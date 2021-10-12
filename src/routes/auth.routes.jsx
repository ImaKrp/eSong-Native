import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { Main } from "../pages/Menu/Main";
import { Profile } from "../pages/Menu/Profile";
import { Player } from "../pages/Menu/Player";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Screen name="Main" component={Main} />
      <Screen name="Profile" component={Profile} />
      <Screen name="Player" component={Player} />
    </Navigator>
  );
}
