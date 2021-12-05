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

export const GET_TIMESERIES = gql`
  query Timeseries(
    $assetId: String!
    $quoteId: String!
    $periodId: String!
    $timeStart: String!
    $timeEnd: String!
  ) {
    timeseries(
      assetId: $assetId
      quoteId: $quoteId
      periodId: $periodId
      timeStart: $timeStart
      timeEnd: $timeEnd
    ) {
      time_period_start
      time_period_end
      rate_high
    }
  }
`;
