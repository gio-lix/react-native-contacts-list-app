import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ROUTES } from "../constants";
import { Login, SignUp } from "../screens";

const Stack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.REGISTER} component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
