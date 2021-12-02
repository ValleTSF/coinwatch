import { gql } from "@apollo/client";

export const GET_ALL_ASSETS = gql`
  query {
    assets {
      name
      asset_id
      type_is_crypto
      asset_icon
      image
      price_usd
    }
  }
`;
export const GET_ASSET = gql`
  query ($searchString: String!) {
    asset(searchString: $searchString) {
      name
      asset_id
      type_is_crypto
      asset_icon
      image
      price_usd
    }
  }
`;
