import { useQuery } from "@apollo/client";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { format, subDays, subMonths, subWeeks } from "date-fns";
import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import { StarIcon as NonFavoriteIcon } from "react-native-heroicons/outline";
import { StarIcon as FavoriteIcon } from "react-native-heroicons/solid";
import Button from "../../components/Button";
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
  const [timeStart, setTimeStart] = useState<string>();
  const [timeEnd, setTimeEnd] = useState<string>();
  const {
    data = { timeseries: [] },
    loading,
    error,
  } = useQuery<TimeseriesData>(GET_TIMESERIES, {
    variables: {
      assetId,
      quoteId: "USD",
      periodId: "1DAY",
      timeStart,
      timeEnd,
    },
  });

  const handleOnDateClick = (chosenTime: string) => {
    const today = format(new Date(), "yyyy-MM-dd");
    let targetDay;
    if (chosenTime === "1D") {
      targetDay = format(subDays(new Date(), 1), "yyyy-MM-dd");
    } else if (chosenTime === "1W") {
      targetDay = format(subWeeks(new Date(), 1), "yyyy-MM-dd");
    } else {
      targetDay = format(subMonths(new Date(), 1), "yyyy-MM-dd");
    }
    setTimeEnd(today);
    setTimeStart(targetDay);
  };

  const { timeseries } = data;

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
          {!loading && (
            <S.TimeContainer>
              <Button
                onPress={() => handleOnDateClick("1D")}
                title={"1D"}
                size="xs"
              />
              <Button
                onPress={() => handleOnDateClick("1W")}
                title={"1W"}
                size="xs"
              />
              <Button
                onPress={() => handleOnDateClick("1M")}
                title={"1M"}
                size="xs"
              />
            </S.TimeContainer>
          )}
        </S.CoinContainer>
      </S.Background>
    </S.Container>
  );
}
