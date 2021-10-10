import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SignIn } from "../pages/Sign/SignIn";
import { SignUp } from "../pages/Sign/SignUp";

const { Navigator, Screen } = createStackNavigator();

export function PublicRoutes() {
  return (
    <Navigator screenOptions={{
        headerShown: false
      }}>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
}
