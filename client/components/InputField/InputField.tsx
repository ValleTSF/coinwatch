import React from "react";
import * as S from "./styled";

interface InputFieldProps {
  icon?: React.ReactNode;
  placeholder?: string;
}

const InputField = ({ placeholder, icon }: InputFieldProps) => {
  return (
    <S.InputContainer>
      {icon && icon}
      <S.SearchInput placeholder={placeholder}></S.SearchInput>
    </S.InputContainer>
  );
};

export default InputField;
