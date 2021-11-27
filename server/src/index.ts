import { ApolloServer } from "apollo-server";
import axios, { AxiosResponse } from "axios";
import endpoints from "./endpoints";
import { Asset as AssetInterface, AssetIcon, AssetMerged } from "./models";
import { Asset, Query } from "./resolvers";
import { typeDefs } from "./typeDefs";

require("dotenv").config();

const headers = { "X-CoinAPI-Key": process.env.COINAPI_API_KEY! };

const getAssets = () => {
  const mergedList: AssetMerged[] = [];
  axios
    .get(endpoints.getAllAssets, { headers })
    .then(({ data: assetList }: AxiosResponse<AssetInterface[]>) => {
      axios
        .get(endpoints.getAllAssetIcons, { headers })
        .then(({ data: assetIconList }: AxiosResponse<AssetIcon[]>) => {
          assetList.forEach((asset) => {
            const assetIcon = assetIconList.find(
              (icon) => icon.asset_id === asset.asset_id
            );
            if (assetIcon) {
              const { url } = assetIcon;
              mergedList.push({ ...asset, image: url });
            }
          });
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));

  return mergedList;
};

const assets = getAssets();
const cryptoCurrencies = assets.filter((asset) => asset.type_is_crypto === 1);
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
