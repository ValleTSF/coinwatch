export interface Asset {
  asset_id: string;
  name: string;
  type_is_crypto: number;
  asset_icon: string;
  image: string;
}

export interface AssetData {
  asset: Asset[];
}
