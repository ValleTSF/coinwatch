import { useQuery } from "@apollo/client";
import React, { FC, useState } from "react";
import { ActivityIndicator } from "react-native";
import { SearchIcon } from "react-native-heroicons/solid";
import InputField from "../../components/InputField";
import { AssetData } from "../../models";
import { GET_ASSET } from "../../queries";
import theme from "../../theme";
import * as S from "./styled";

export const HomeScreen = () => {
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
        <CoinResult searchString={searchString} />
      </S.Background>
    </S.Container>
  );
};

const CoinResult: FC<{ searchString: string }> = ({ searchString }) => {
  const {
    data = { asset: [] },
    loading,
    error,
  } = useQuery<AssetData>(GET_ASSET, { variables: { searchString } });

  const { asset } = data;
  console.log("LOADING STATUS", loading);

  if (loading) {
    return (
      <S.CoinContainer>
        <ActivityIndicator size="large" color="white" />
      </S.CoinContainer>
    );
  }

  console.log("start of rendering list");

  if (asset.length > 0) {
    return (
      <S.CoinContainer>
        {asset.map((asset) => {
          console.log(asset);
          return (
            <S.CoinCard key={asset.asset_id}>
              <S.CoinImage source={{ uri: asset.image }} />
              <S.CoinTextContainer>
                <S.CoinTitle>{asset.asset_id}</S.CoinTitle>
                <S.CoinName>{asset.name}</S.CoinName>
              </S.CoinTextContainer>
              <S.CoinPrice>$ {asset.price_usd.toFixed(2)}</S.CoinPrice>
            </S.CoinCard>
          );
        })}
      </S.CoinContainer>
    );
  } else return null;
};

export default HomeScreen;
