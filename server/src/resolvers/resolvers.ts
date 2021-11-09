import axios from "axios";
import endpoints from "../endpoints";

export const resolvers = {
  Query: {
    assets: () => {
      return axios
        .get(endpoints.getAllAssets, {
          headers: {
            "X-CoinAPI-Key": process.env.COINAPI_API_KEY!,
          },
        })
        .then(({ data }) => {
          return data;
        });
    },
    asset: (parent: any, args: any) => {
      const { searchString } = args;
      return axios
        .get(endpoints.getAsset(searchString), {
          headers: {
            "X-CoinAPI-Key": process.env.COINAPI_API_KEY!,
          },
        })
        .then(({ data }) => {
          return data;
        });
    },
    symbols: (parent: any, args: any) => {
      const { searchString } = args;
      return axios
        .get(
          `https://rest.coinapi.io/v1/symbols?filter_symbol_id=${searchString}`,
          {
            headers: {
              "X-CoinAPI-Key": process.env.COINAPI_API_KEY!,
            },
          }
        )
        .then(({ data }) => {
          return data;
        });
    },
  },
  Asset: {
    asset_icon: (parent: any) => {
      return `https://cryptoicons.org/api/white/${parent.asset_id.toLowerCase()}/50`;
    },
  },
};

export default resolvers;
