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
