import { gql } from "apollo-server";

export const typeDefs = gql`
  type Asset {
    asset_id: ID!
    name: String!
    type_is_crypto: Int!
    data_quote_start: String
    data_quote_end: String
    data_orderbook_start: String
    data_orderbook_end: String
    data_trade_start: String
    data_trade_end: String
    data_symbols_count: Int!
    volume_1hrs_usd: Float
    volume_1day_usd: Float
    volume_1mth_usd: Float
    price_usd: Float
    id_icon: String
    data_start: String
    data_end: String
    asset_icon: String
    image: String
  }

  type Timeseries {
    time_period_start: String!
    time_period_end: String!
    time_open: String!
    time_close: String!
    rate_open: Float!
    rate_high: Float!
    rate_low: Float!
    rate_close: Float!
  }

  type Query {
    assets(searchString: String!): [Asset]
    timeseries(
      assetId: String!
      quoteId: String!
      periodId: String!
      timeStart: String!
      timeEnd: String!
    ): [Timeseries]
  }
`;

export default typeDefs;
