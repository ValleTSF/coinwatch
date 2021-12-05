import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React, { FC, useEffect, useState } from "react";
import { Text } from "react-native";
import useFavorite from "../../hooks/useFavorite";
import { Asset } from "../../models";
import { ScreenRoutes } from "../../navigation/constants";
import { RootStackParamList } from "../../navigation/types";
import * as S from "./styled";

type FavoriteScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoutes.MAIN_SCREEN
>;

export const FavoritesScreen = ({ navigation }: FavoriteScreenProps) => {
  const [favoriteData, setFavoriteData] = useState<Asset[]>();
  const { getFavorites } = useFavorite();

  useEffect(() => {
    getFavorites().then((favorites: Asset[]) => {
      if (favorites.length > 0) {
        setFavoriteData([...favorites]);
      }
    });
  }, []);

  if (!favoriteData) {
    return (
      <S.Container>
        <S.Background source={require("../../assets/images/background.png")}>
          <S.Header>Favorites</S.Header>
          <Text>Add crypto coins to your favorites!</Text>
        </S.Background>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Background source={require("../../assets/images/background.png")}>
        <S.Header>Favorites</S.Header>
        <FavoriteCoins favorites={favoriteData} navigation={navigation} />
      </S.Background>
    </S.Container>
  );
};

const FavoriteCoins: FC<{
  favorites: Asset[];
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    ScreenRoutes.MAIN_SCREEN
  >;
}> = ({ navigation, favorites }) => {
  if (favorites.length > 0) {
    return (
      <S.CoinContainer
        data={favorites}
        renderItem={({ item: asset }) => {
          return (
            <S.CoinCard
              key={asset.asset_id}
              onPress={() =>
                navigation.navigate(ScreenRoutes.COIN_DETAILS_SCREEN, {
                  asset,
                })
              }
            >
              <S.CoinImage source={{ uri: asset.image }} />
              <S.CoinTextContainer>
                <S.CoinTitle>{asset.asset_id}</S.CoinTitle>
                <S.CoinName>{asset.name}</S.CoinName>
              </S.CoinTextContainer>
              <S.CoinPrice>$ {asset.price_usd.toFixed(2)}</S.CoinPrice>
            </S.CoinCard>
          );
        }}
        keyExtractor={(item) => item.asset_id}
      />
    );
  } else return null;
};

export default FavoritesScreen;
