import { useQuery } from "@apollo/client";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import { StarIcon as NonFavoriteIcon } from "react-native-heroicons/outline";
import { StarIcon as FavoriteIcon } from "react-native-heroicons/solid";
import Chart from "../../components/Chart";
import Divider from "../../components/Divider";
import { TimeseriesData } from "../../models";
import { ScreenRoutes } from "../../navigation/constants";
import { RootStackParamList } from "../../navigation/types";
import { GET_TIMESERIES } from "../../queries";
import * as S from "./styled";

type CoinDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoutes.COIN_DETAILS_SCREEN
>;

export default function CoinDetailsScreen({ route }: CoinDetailsScreenProps) {
  const { asset } = route.params;
  const { asset_id: assetId } = asset;
  const [favorite, setFavorite] = useState(false);
  const [timeStart, setTimeStart] = useState();
  const [timeEnd, setTimeEnd] = useState();
  const {
    data = { timeseries: [] },
    loading,
    error,
  } = useQuery<TimeseriesData>(GET_TIMESERIES, {
    variables: {
      assetId,
      quoteId: "USD",
      periodId: "1DAY",
      timeStart: "2021-11-27",
      timeEnd: "2021-12-04",
    },
  });

  const { timeseries } = data;

  console.log("image uri", asset.image);

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
          <S.ChartContainer>
            {loading ? (
              <ActivityIndicator size="large" color="white" />
            ) : (
              <Chart timeseries={timeseries} />
            )}
          </S.ChartContainer>
        </S.CoinContainer>
      </S.Background>
    </S.Container>
  );
}
