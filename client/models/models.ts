export interface Asset {
  asset_id: string;
  name: string;
  type_is_crypto: number;
  asset_icon: string;
}

export interface AssetData {
  asset: Asset[];
}
