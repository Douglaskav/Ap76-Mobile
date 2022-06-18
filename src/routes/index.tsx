import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Onboarding } from "../screens/Onboarding";
import { ButtonsScreen } from "../screens/ButtonsScreen";
import { Login } from "../screens/Login";
import { SignUp } from "../screens/SignUp";
import { ConfirmCode } from "../screens/ConfirmCode";

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ConfirmCode" component={ConfirmCode} />
        <Stack.Screen name="ButtonsScreen" component={ButtonsScreen} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
