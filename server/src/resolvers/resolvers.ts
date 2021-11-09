import axios from "axios";
import endpoints from "../endpoints";

export const resolvers = {
  Query: {
    assets: (parent: any, args: any) => {
      const { searchString } = args;
      return axios
        .get(endpoints.getAssets(searchString), {
          headers: {
            "X-CoinApi-Key": "94C3CE84-2FF6-4795-9B28-97325DE713C5",
          },
        })
        .then(({ data }) => {
          return data;
        });
    },

    symbols: (parent: any, args: any) => {
      const { searchString } = args;
      console.log("args", args);
      console.log("searchString", searchString);
      return axios
        .get(
          `https://rest.coinapi.io/v1/symbols?filter_symbol_id=${searchString}`,
          {
            headers: {
              "X-CoinApi-Key": "94C3CE84-2FF6-4795-9B28-97325DE713C5",
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
      return axios
        .get(endpoints.getAllAssetIcons, {
          headers: {
            "X-CoinApi-Key": "94C3CE84-2FF6-4795-9B28-97325DE713C5",
          },
        })
        .then(({ data: icons }) => {
          console.log("icons", icons);
          console.log("parent", parent);
          const theIcon = icons.find(
            (icon: any) => icon.asset_id === parent.asset_id
          );
          console.log("theIcon", theIcon);

          return theIcon;
        });
    },
  },
};

export default resolvers;
