import axios, { AxiosResponse } from "axios";
import endpoints from "../endpoints";

const headers = { "X-CoinAPI-Key": process.env.COINAPI_API_KEY! };

export const Query = {
  assets: (parent: any, args: any, ctx: any) => {
    return ctx.assets;
  },

  asset: (parent: any, { searchString }: { searchString: string }) => {
    return axios
      .get(endpoints.getAsset(searchString), { headers })
      .then(({ data }: AxiosResponse) => {
        return data;
      });
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
