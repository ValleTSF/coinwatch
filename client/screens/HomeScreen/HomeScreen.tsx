import { useQuery } from "@apollo/client";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React, { FC, useState } from "react";
import { ActivityIndicator } from "react-native";
import { SearchIcon } from "react-native-heroicons/solid";
import InputField from "../../components/InputField";
import { AssetData } from "../../models";
import { ScreenRoutes } from "../../navigation/constants";
import { RootStackParamList } from "../../navigation/types";
import { GET_ASSETS } from "../../queries";
import theme from "../../theme";
import * as S from "./styled";

type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoutes.MAIN_SCREEN
>;

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [searchString, setSearchString] = useState<string>("");

  const handleOnChange = (text: string) => {
    if (text.length > 1) {
      setSearchString(text);
    } else {
      setSearchString("");
    }
  };

  return (
    <S.Container>
      <S.Background source={require("../../assets/images/background.png")}>
        <S.Header>Coinwatch</S.Header>
        <S.SearchField>
          <InputField
            onChangeText={(text: string) => handleOnChange(text)}
            placeholder="Search..."
            icon={
              <SearchIcon
                width={40}
                height={40}
                color={theme.secondary.onColor}
              />
            }
          />
        </S.SearchField>
        <CoinResult navigation={navigation} searchString={searchString} />
      </S.Background>
    </S.Container>
  );
};

const CoinResult: FC<{
  searchString: string;
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    ScreenRoutes.MAIN_SCREEN
  >;
}> = ({ searchString, navigation }) => {
  const {
    data = { assets: [] },
    loading,
    error,
  } = useQuery<AssetData>(GET_ASSETS, { variables: { searchString } });

  const { assets } = data;

  if (loading) {
    return <ActivityIndicator size="large" color="white" />;
  }

  if (assets.length > 0) {
    return (
      <S.CoinContainer
        data={assets}
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

export default HomeScreen;
