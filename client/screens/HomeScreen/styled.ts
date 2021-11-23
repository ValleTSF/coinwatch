import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import theme from "../../theme";

const { height } = Dimensions.get("screen");

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Header = styled.Text`
  margin-top: ${height * 0.05}px;
  color: ${theme.primary.onColor};
  font-size: 64px;
  font-weight: bold;
`;

export const SearchField = styled.View`
  margin-top: 15px;
`;

export const CoinContainer = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
}))`
  margin-top: 20px;
  flex: 1;
  width: 100%;
  overflow: hidden;
`;

export const CoinCard = styled.View`
  border-radius: 10px;
  margin: 10px;
  padding: 5px;
  align-self: center;
  justify-content: flex-start;
  align-items: center;
  width: 95%;
  background-color: rgba(200, 200, 200, 0.7);
  flex-direction: row;
`;

export const CoinTextContainer = styled.View`
  justify-content: center;
  margin-left: 30px;
`;

export const CoinTitle = styled.Text`
  font-size: 24px;
`;

export const CoinName = styled.Text`
  font-size: 20px;
`;

export const CoinImage = styled.Image`
  width: 50px;
  height: 50px;
  margin-left: 5px;
  margin-right: 5px;
`;
