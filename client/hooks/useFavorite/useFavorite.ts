import AsyncStorage from "@react-native-async-storage/async-storage";
import { Asset } from "../../models";
import { FAVORITES } from "./constants";

export default function useFavorite() {
  const addFavorite = async (favoriteToAdd: Asset) => {
    AsyncStorage.getItem(FAVORITES.KEY)
      .then((favorites) => {
        if (favorites) {
          let currentFavorites = JSON.parse(favorites) as Asset[];
          currentFavorites.forEach((favorite) => {
            if (favorite.asset_id === favoriteToAdd.asset_id) {
              return FAVORITES.STATUS_ERROR;
            }
          });
          currentFavorites = [...currentFavorites, favoriteToAdd];
          AsyncStorage.setItem(FAVORITES.KEY, JSON.stringify(currentFavorites))
            .then(() => {
              return FAVORITES.STATUS_OK;
            })
            .catch(() => FAVORITES.STATUS_ERROR);
        } else {
          const storage = [];
          storage.push(favoriteToAdd);
          AsyncStorage.setItem(FAVORITES.KEY, JSON.stringify(storage))
            .then(() => {
              return FAVORITES.STATUS_OK;
            })
            .catch(() => FAVORITES.STATUS_ERROR);
        }
      })
      .catch(() => FAVORITES.STATUS_ERROR);
  };

  const removeFavorite = async (favoriteToRemove: Asset) => {
    AsyncStorage.getItem(FAVORITES.KEY)
      .then((favorites) => {
        if (favorites) {
          const currentFavorites = JSON.parse(favorites) as Asset[];
          const newFavorites = currentFavorites.filter(
            (favorite) => !(favorite.asset_id === favoriteToRemove.asset_id)
          );
          AsyncStorage.setItem(FAVORITES.KEY, JSON.stringify(newFavorites));
        }
      })
      .catch(() => FAVORITES.STATUS_ERROR);
  };

  const getFavorites = async () => {
    return AsyncStorage.getItem(FAVORITES.KEY)
      .then((favorite) => {
        if (favorite) {
          return JSON.parse(favorite);
        } else {
          return FAVORITES.STATUS_ERROR;
        }
      })
      .catch(() => FAVORITES.STATUS_ERROR);
  };

  return { addFavorite, removeFavorite, getFavorites };
}
