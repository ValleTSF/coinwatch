import styled from "styled-components";

interface TabTitleProps {
  focused: boolean;
}

export const Container = styled.View`
  top: -10px;
  align-items: center;
  justify-content: center;
`;

export const TabTitle = styled.Text<TabTitleProps>`
  color: ${({ focused }: TabTitleProps) => (focused ? "#0C3274" : "#595959")};
  font-size: 16px;
  font-weight: bold;
`;
