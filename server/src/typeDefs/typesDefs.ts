import { gql } from "apollo-server";

export const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type MainCard {
    title: String
    image: String
  }

  type Query {
    books: [Book]
    mainCards: [MainCard]
  }
`;

export default typeDefs;
