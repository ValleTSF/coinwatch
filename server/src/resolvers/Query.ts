import axios, { AxiosResponse } from "axios";
import { Asset } from "../models";

const headers = { "X-CoinAPI-Key": process.env.COINAPI_API_KEY! };

export const Query = {
  assets: (parent: any, args: any, ctx: any) => {
    return ctx.assets;
  },

  asset: (
    parent: any,
    { searchString }: { searchString: string },
    { assets }: { assets: Asset[] }
  ) => {
    if (searchString === "") {
      return [];
    } else {
      return assets.filter((asset) =>
        asset.name.toLowerCase().includes(searchString.toLowerCase())
      );
    }
  },

  symbols: (parent: any, { searchString }: { searchString: String }) => {
    return axios
      .get(
        `https://rest.coinapi.io/v1/symbols?filter_symbol_id=${searchString}`,
        { headers }
      )
      .then(({ data }: AxiosResponse) => {
        return data;
      });
  },
};

export default Query;
