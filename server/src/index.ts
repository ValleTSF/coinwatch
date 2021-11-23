import { ApolloServer } from "apollo-server";
import axios, { AxiosResponse } from "axios";
import endpoints from "./endpoints";
import { Asset as AssetInterface } from "./models";
import { Asset, Query } from "./resolvers";
import { typeDefs } from "./typeDefs";

require("dotenv").config();

const headers = { "X-CoinAPI-Key": process.env.COINAPI_API_KEY! };

const getAssets = async () => {
  return await axios.get(endpoints.getAllAssets, { headers });
};

getAssets().then(({ data }: AxiosResponse<AssetInterface[]>) => {
  const cryptoCurrencies = data.filter((asset) => asset.type_is_crypto === 1);
  const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
      Asset,
    },
    context: {
      assets: cryptoCurrencies,
    },
  });

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
});
