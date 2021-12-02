import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CoinDetailsScreen from "../screens/CoinDetailsScreen";
import { ScreenRoutes } from "./constants";
import Tabs from "./Tabs";
import { RootStackParamList } from "./types";

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ScreenRoutes.MAIN_SCREEN} component={Tabs} />
        <Stack.Screen
          name={ScreenRoutes.COIN_DETAILS_SCREEN}
          component={CoinDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
