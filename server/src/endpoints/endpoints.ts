const host = "https://rest.coinapi.io";
const version = "/v1";
const apiBase = (url: string) => `${host}${version}${url}`;

const endpoints = {
  getAssets: (searchString: string) =>
    apiBase(`/assets/?filter_asset_id=${searchString}`),
};

export default endpoints;
