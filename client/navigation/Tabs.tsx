import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import { SearchIcon, ViewListIcon } from "react-native-heroicons/solid";
import TabBarButton from "../components/TabBarButton";
import BrowseCoinScreen from "../screens/BrowseCoinsScreen";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
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
        name="Home"
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
                    color={focused ? "#0C3274" : "#595959"}
                  />
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="BrowseCoin"
        component={BrowseCoinScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabBarButton
                focused={focused}
                title="Browse"
                icon={
                  <ViewListIcon
                    width={40}
                    height={40}
                    color={focused ? "#0C3274" : "#595959"}
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
