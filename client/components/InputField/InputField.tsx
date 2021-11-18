import React from "react";
import * as S from "./styled";

interface InputFieldProps {
  icon?: React.ReactNode;
  placeholder?: string;
  onChangeText?: (text: string) => void;
}

const InputField = ({ placeholder, icon, onChangeText }: InputFieldProps) => {
  return (
    <S.InputContainer>
      {icon && icon}
      <S.SearchInput
        onChangeText={onChangeText}
        placeholder={placeholder}
      ></S.SearchInput>
    </S.InputContainer>
  );
};

export default InputField;
