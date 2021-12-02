import styled from "styled-components/native";

interface ButtonContainerProps {
  size: "xs" | "sm" | "md" | "lg";
}

interface ButtonTextProps extends ButtonContainerProps {}

export const RegularButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  background-color: #0c3274;
  padding: ${({ size }) =>
    (size === "xs" && "2px 20px") ||
    (size === "sm" && "5px 30px") ||
    (size === "md" && "10px 40px") ||
    (size === "lg" && "15px 50px")};
`;

export const RoundButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  justify-content: center;
  align-items: center;
  border-radius: 50;
  padding: 10px;
  background-color: #0c3274;
  height: ${({ size }) =>
    (size === "xs" && "30px") ||
    (size === "sm" && "60px") ||
    (size === "md" && "80px") ||
    (size === "lg" && "100px")};
  width: ${({ size }) =>
    (size === "xs" && "30px") ||
    (size === "sm" && "60px") ||
    (size === "md" && "80px") ||
    (size === "lg" && "100px")};
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  font-size: ${({ size }) =>
    (size === "xs" && "15px") ||
    (size === "sm" && "20px") ||
    (size === "md" && "22px") ||
    (size === "lg" && "24px")};
  font-weight: bold;
  color: white;
`;
