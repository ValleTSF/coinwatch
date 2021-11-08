import axios from "axios";
import endpoints from "../endpoints";
import { books, mainCards } from "../index";

export const resolvers = {
  Query: {
    books: () => books,
    mainCards: () => mainCards,
    dog: () => {
      return axios
        .get("https://dog.ceo/api/breeds/image/random")
        .then(({ data }) => data);
    },
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
};

export default resolvers;
