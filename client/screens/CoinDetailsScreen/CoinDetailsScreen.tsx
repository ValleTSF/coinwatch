import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { StarIcon as NonFavoriteIcon } from "react-native-heroicons/outline";
import { StarIcon as FavoriteIcon } from "react-native-heroicons/solid";
import Divider from "../../components/Divider";
import { ScreenRoutes } from "../../navigation/constants";
import { RootStackParamList } from "../../navigation/types";
import * as S from "./styled";

type CoinDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoutes.COIN_DETAILS_SCREEN
>;

export default function CoinDetailsScreen({ route }: CoinDetailsScreenProps) {
  const { asset } = route.params;
  const [favorite, setFavorite] = useState(false);

  return (
    <S.Container>
      <S.Background source={require("../../assets/images/background.png")}>
        <S.CoinContainer>
          <S.CoinHeader>
            <S.MetaDataContainer>
              <S.CoinImage source={{ uri: asset.image }} />
              <S.CoinHeaderInformationContainer>
                <S.CoinTitle>{asset.asset_id}</S.CoinTitle>
                <S.CoinName>{asset.name}</S.CoinName>
                <S.CoinPrice>$ {asset.price_usd.toFixed(5)}</S.CoinPrice>
              </S.CoinHeaderInformationContainer>
            </S.MetaDataContainer>
            <S.FavoriteContainer onPress={() => setFavorite(!favorite)}>
              {favorite ? (
                <FavoriteIcon width={40} height={40} color="gold" />
              ) : (
                <NonFavoriteIcon width={40} height={40} color="gray" />
              )}
            </S.FavoriteContainer>
          </S.CoinHeader>
          <Divider width={90} />
        </S.CoinContainer>
      </S.Background>
    </S.Container>
  );
}
