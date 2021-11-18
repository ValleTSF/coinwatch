import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import Tabs from "./navigation/Tabs";
import theme from "./theme";

const client = new ApolloClient({
  uri: "http://10.0.2.2:4000/",
  cache: new InMemoryCache(),
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <StatusBar backgroundColor={theme.primary.color} />
        <Tabs />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
