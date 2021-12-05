import axios, { AxiosResponse } from "axios";
import endpoints from "../endpoints";
import { Asset, Timeseries } from "../models";

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

  timeseries: (
    parent: any,
    {
      assetId,
      quoteId,
      periodId,
      timeStart,
      timeEnd,
    }: {
      assetId: string;
      quoteId: string;
      periodId: string;
      timeStart: string;
      timeEnd: string;
    }
  ) => {
    return axios
      .get(
        endpoints.getTimeseries(assetId, quoteId, periodId, timeStart, timeEnd),
        {
          headers,
        }
      )
      .then(({ data }: AxiosResponse<Timeseries[]>) => {
        return data;
      })
      .catch((error) => console.log(error));
  },
};

export default Query;
