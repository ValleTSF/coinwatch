export interface Asset {
  asset_id: string;
  name: string;
  type_is_crypto: number;
  asset_icon: string;
  image: string;
  price_usd: number;
}

export interface AssetData {
  asset: Asset[];
}

export interface TimeseriesData {
  timeseries: Timeseries[];
}

export interface Timeseries {
  time_period_start: string;
  time_period_end: string;
  time_open: string;
  time_close: string;
  rate_open: number;
  rate_high: number;
  rate_low: number;
  rate_close: number;
}
