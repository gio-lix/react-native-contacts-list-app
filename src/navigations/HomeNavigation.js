import { createStackNavigator } from "@react-navigation/stack";
import { ROUTES } from "../constants";
import { ContactDetails, Contacts, CreateContact, Settings } from "../screens";

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.CONTACTS}>
      <Stack.Screen name={ROUTES.CONTACTS} component={Contacts} />
      <Stack.Screen name={ROUTES.CONTACTS_DETAILS} component={ContactDetails} />
      <Stack.Screen name={ROUTES.CONTACTS_CREATE} component={CreateContact} />
      <Stack.Screen name={ROUTES.SETTINGS} component={Settings} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
