import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import React from "react";
import RootNavigation from "./navigation";
import theme from "./theme";

const client = new ApolloClient({
  uri: "http://192.168.1.144:4000/",
  cache: new InMemoryCache(),
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <StatusBar backgroundColor={theme.primary.color} />
      <RootNavigation />
    </ApolloProvider>
  );
};

export default App;
