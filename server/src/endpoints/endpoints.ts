require("dotenv").config();

const host = process.env.COINAPI_HOST;
const version = "/v1";
const apiBase = (url: string) => `${host}${version}${url}`;

const endpoints = {
  getAllAssets: apiBase("/assets"),
  getAllAssetIcons: apiBase("/assets/icons/25"),
  getAsset: (searchString: string) =>
    apiBase(`/assets/?filter_asset_id=${searchString}`),
  getTimeseries: (
    assetId: string,
    quoteId: string,
    periodId: string,
    timeEnd: string
  ) =>
    apiBase(
      `/exchangerate/${assetId}/${quoteId}/history?period_id=${periodId}&time_end=${timeEnd}`
    ),
};

export default endpoints;
