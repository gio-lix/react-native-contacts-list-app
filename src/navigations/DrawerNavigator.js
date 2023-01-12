import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigation from "./HomeNavigation";
import { ROUTES } from "../constants";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name={ROUTES.HOME_NAVIGATOR} component={HomeNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
