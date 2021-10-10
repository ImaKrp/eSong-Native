import React from "react";
import { PublicRoutes } from "./public.routes";
import { AuthRoutes } from "./auth.routes";
import { NavigationContainer } from "@react-navigation/native";
import { useSession } from "../hooks/useSession";

export function Routes() {
  const { session } = useSession();

  return (
    <NavigationContainer>
      {session ? <AuthRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
}
