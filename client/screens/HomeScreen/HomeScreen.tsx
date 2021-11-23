import { useQuery } from "@apollo/client";
import React, { FC, useState } from "react";
import { SearchIcon } from "react-native-heroicons/solid";
import InputField from "../../components/InputField";
import { AssetData } from "../../models";
import { GET_ASSET } from "../../queries";
import theme from "../../theme";
import * as S from "./styled";

export const HomeScreen = () => {
  const [searchString, setSearchString] = useState<string>("");

  const handleOnChange = (text: string) => {
    setSearchString(text);
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
    return null;
  }

  console.log("start of rendering list");

  if (asset.length > 0) {
    console.log("finish");

    return (
      <S.CoinContainer>
        {asset.map((asset) => {
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

export default HomeScreen;
