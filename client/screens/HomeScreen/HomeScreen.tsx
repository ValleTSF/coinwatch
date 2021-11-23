import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { SearchIcon } from "react-native-heroicons/solid";
import InputField from "../../components/InputField";
import { Asset, AssetData } from "../../models";
import { GET_ALL_ASSETS } from "../../queries";
import theme from "../../theme";
import * as S from "./styled";

export const HomeScreen = () => {
  const [filteredList, setFilteredList] = useState<Asset[]>([]);
  const [originalList, setOriginalList] = useState<Asset[]>([]);
  const {
    data = { assets: [] },
    loading,
    error,
  } = useQuery<AssetData>(GET_ALL_ASSETS);

  useEffect(() => {
    if (data) {
      const { assets } = data;
      setOriginalList(
        [...assets].filter((asset) => asset.type_is_crypto === 1)
      );
    }
  }, [loading]);

  if (loading) {
    return <Text>Loading</Text>;
  }

  const handleOnChange = (text: string) => {
    if (text === "") {
      setFilteredList([...originalList]);
    }

    setFilteredList(
      [...originalList].filter((asset) =>
        asset.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const renderCoins = () => {
    console.log("filtered length", filteredList.length);

    if (filteredList.length > 0) {
      return (
        <S.CoinContainer>
          {filteredList.map((asset) => {
            return (
              <S.CoinCard key={asset.asset_id}>
                <S.CoinImage
                  source={require("../../assets/images/dogecoin.png")}
                />
                <S.CoinTextContainer>
                  <S.CoinTitle>{asset.asset_id}</S.CoinTitle>
                  <S.CoinName>{asset.name}</S.CoinName>
                </S.CoinTextContainer>
              </S.CoinCard>
            );
          })}
        </S.CoinContainer>
      );
    } else return null;
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
        {renderCoins()}
      </S.Background>
    </S.Container>
  );
};

export default HomeScreen;
