import React from "react";
import * as S from "./styled";

interface TabBarButtonProps {
  focused: boolean;
  icon?: React.ReactNode;
  title?: string;
}

const TabBarButton = ({ focused, icon, title }: TabBarButtonProps) => {
  return (
    <S.Container>
      {icon && icon}
      {title && <S.TabTitle focused={focused}>{title}</S.TabTitle>}
    </S.Container>
  );
};

export default TabBarButton;
