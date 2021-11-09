import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const server = new ApolloServer({ typeDefs, resolvers });
require("dotenv").config();

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
