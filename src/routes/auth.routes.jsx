import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Main } from "../pages/Menu/Main";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{
        headerShown: false
      }}>
      <Screen name="Main" component={Main} />
    </Navigator>
  );
}
