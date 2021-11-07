import axios from "axios";
import { books, mainCards } from "../index";

export const resolvers = {
  Query: {
    books: () => books,
    mainCards: () => mainCards,
    dog: () => {
      return axios
        .get("https://dog.ceo/api/breeds/image/random")
        .then(({ data }) => data);
    },
  },
};

export default resolvers;
