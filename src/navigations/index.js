import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";
import { useContext } from "react";
import { GlobalContext } from "../context/Provider";

const AppNavContainer = () => {
  const { authState: {isLoggedIn} } = useContext(GlobalContext);

  return (
    <NavigationContainer>
      {isLoggedIn
        ? <DrawerNavigator />
        : <AuthNavigator />
      }
    </NavigationContainer>
  );
};

export default AppNavContainer;
