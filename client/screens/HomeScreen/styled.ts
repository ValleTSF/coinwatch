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
