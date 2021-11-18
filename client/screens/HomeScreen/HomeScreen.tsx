import React from "react";
import { SearchIcon } from "react-native-heroicons/solid";
import InputField from "../../components/InputField";
import theme from "../../theme";
import * as S from "./styled";

export const HomeScreen = () => {
  return (
    <S.Container>
      <S.Background source={require("../../assets/images/background.png")}>
        <S.Header>Coinwatch</S.Header>
        <S.SearchField>
          <InputField
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
