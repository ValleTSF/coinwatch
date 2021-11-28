import { gql } from "apollo-server";

export const typeDefs = gql`
  type Symbol {
    symbol_id: ID!
    exchange_id: String!
    symbol_type: String!
    asset_id_base: String
    asset_id_quote: String
    option_type_is_call: Boolean
    option_strike_price: Float
    option_contract_unit: Float
    option_exercise_style: String
    option_expiration_time: String
    data_end: String
    data_quote_end: String
    data_trade_end: String
    symbol_id_exchange: String
    asset_id_base_exchange: String
    asset_id_quote_exchange: String
    image: String
  }

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

  input AssetsFilter {
    name: String
    type_is_crypto: Int
  }

  type Query {
    symbols(searchString: String!): [Symbol]
    asset(searchString: String!): [Asset]
    assets(input: AssetsFilter): [Asset]
    timeseries(
      assetId: String!
      quoteId: String!
      periodId: String!
      timeEnd: String!
    ): [Timeseries]
  }
`;

export default typeDefs;
