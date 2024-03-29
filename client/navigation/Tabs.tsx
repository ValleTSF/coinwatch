import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import { SearchIcon, StarIcon } from "react-native-heroicons/solid";
import TabBarButton from "../components/TabBarButton";
import FavoritesScreen from "../screens/FavoritesScreen";
import HomeScreen from "../screens/HomeScreen";
import theme from "../theme";
import { TabRoutes } from "./constants";
import { RootTabParamList } from "./types";

const Tab = createBottomTabNavigator<RootTabParamList>();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 100,
          right: 100,
          backgroundColor: "#e8e8e8",
          borderRadius: 10,
          height: 50,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name={TabRoutes.HOME_SCREEN}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabBarButton
                focused={focused}
                title="Search"
                icon={
                  <SearchIcon
                    width={40}
                    height={40}
                    color={
                      focused ? theme.accent.color : theme.secondary.onColor
                    }
                  />
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={TabRoutes.BROWSE_COINS_SCREEN}
        component={FavoritesScreen}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => {
            return (
              <TabBarButton
                focused={focused}
                title="Favorites"
                icon={
                  <StarIcon
                    width={40}
                    height={40}
                    color={
                      focused ? theme.accent.color : theme.secondary.onColor
                    }
                  />
                }
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#3f3f3f",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Tabs;
