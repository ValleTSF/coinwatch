import { Dimensions } from "react-native";
import styled from "styled-components/native";
import theme from "../../theme";

const { width } = Dimensions.get("window");

export const InputContainer = styled.View`
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  background-color: ${theme.secondary.color};
  height: 50px;
  width: ${width * 0.6}px;
  border-radius: 10px;
  padding: 5px 10px;
`;

export const SearchInput = styled.TextInput`
  color: ${theme.secondary.onColor};
  font-size: 24px;
  font-weight: bold;
  margin-left: 5px;
  width: 80%;
`;
