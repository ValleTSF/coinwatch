import styled from "styled-components/native";
import theme from "../../theme";

interface TabTitleProps {
  focused: boolean;
}

export const Container = styled.View`
  top: -10px;
  align-items: center;
  justify-content: center;
`;

export const TabTitle = styled.Text<TabTitleProps>`
  color: ${({ focused }: TabTitleProps) =>
    focused ? theme.accent.color : theme.secondary.onColor};
  font-size: 16px;
  font-weight: bold;
`;
