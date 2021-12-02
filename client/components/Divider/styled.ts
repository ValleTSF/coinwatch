import styled from "styled-components/native";

interface DividerProps {
  width?: number;
}

export const DividerLine = styled.View<DividerProps>`
  border-bottom-color: rgba(120, 120, 120, 0.6);
  border-bottom-width: 1px;
  width: ${({ width }) => width}%;
  align-self: center;
`;
