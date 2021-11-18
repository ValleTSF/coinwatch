import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { SearchIcon } from "react-native-heroicons/solid";
import InputField from "../../components/InputField";
import { GET_ALL_ASSETS } from "../../queries";
import theme from "../../theme";
import * as S from "./styled";

export const HomeScreen = () => {
  const [searchString, setSearchString] = useState<string>("");
  const [searchResult, setSearchResult] = useState();
  const { data, loading, error } = useQuery(GET_ALL_ASSETS);

  if (loading) {
    console.log("---LOADING!---");
  } else {
    console.log("---DONE!---");
  }

  console.log("data", data);
  console.log("error", error);

  const handleOnChange = (text: string) => {
    setSearchString(text);
    console.log(searchString);
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
      </S.Background>
    </S.Container>
  );
};

export default HomeScreen;
