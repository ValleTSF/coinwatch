import { Asset } from "../models";
import { ScreenRoutes, TabRoutes } from "./constants";

export type RootTabParamList = {
  [TabRoutes.HOME_SCREEN]: undefined;
  [TabRoutes.BROWSE_COINS_SCREEN]: undefined;
};

export type RootStackParamList = {
  [ScreenRoutes.MAIN_SCREEN]: undefined;
  [ScreenRoutes.COIN_DETAILS_SCREEN]: { asset: Asset };
};
