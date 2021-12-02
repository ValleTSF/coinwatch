import React from "react";
import * as S from "./styled";

interface ButtonProps {
  onPress: () => void;
  title?: React.ReactNode;
  icon?: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg";
  type?: "round" | "regular";
}

export const Button = ({
  onPress,
  title,
  icon,
  size = "sm",
  type = "regular",
}: ButtonProps) => {
  if (type === "regular") {
    return (
      <S.RegularButtonContainer size={size} onPress={onPress}>
        {title && <S.ButtonText size={size}>{title}</S.ButtonText>}
        {icon && icon}
      </S.RegularButtonContainer>
    );
  } else {
    return (
      <S.RoundButtonContainer size={size} onPress={onPress}>
        {title && <S.ButtonText size={size}>{title}</S.ButtonText>}
        {icon && icon}
      </S.RoundButtonContainer>
    );
  }
};

export default Button;
