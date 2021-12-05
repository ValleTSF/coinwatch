import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const CoinContainer = styled.View`
  background-color: rgba(200, 200, 200, 0.7);
  width: 90%;
  height: 90%;
  border-radius: 10px;
  align-items: flex-start;
`;

export const CoinImage = styled.Image`
  width: 75px;
  height: 75px;
  margin-left: 25px;
  margin-right: 5px;
`;

export const CoinTitle = styled.Text`
  font-size: 24px;
`;

export const CoinName = styled.Text`
  font-size: 20px;
`;

export const CoinHeader = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CoinHeaderInformationContainer = styled.View`
  margin: 20px 10px;
  flex-direction: column;
`;

export const CoinPrice = styled.Text`
  font-size: 24px;
  color: ${theme.success};
  margin-right: 10px;
`;

export const MetaDataContainer = styled.View`
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  width: 85%;
`;
export const FavoriteContainer = styled.TouchableOpacity`
  margin-top: 15px;
  align-self: flex-start;
  right: 0;
`;

export const ChartContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
