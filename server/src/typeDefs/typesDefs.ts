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

  type Dog {
    message: String
    status: String
  }

  type Query {
    books: [Book]
    mainCards: [MainCard]
    dog: Dog
  }
`;

export default typeDefs;
