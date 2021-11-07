import { books, mainCards } from "../index";

export const resolvers = {
  Query: {
    books: () => books,
    mainCards: () => mainCards,
  },
};

export default resolvers;
