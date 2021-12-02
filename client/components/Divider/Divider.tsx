import React from "react";
import * as S from "./styled";

interface DividerProps {
  width?: number;
}

export default function Divider({ width }: DividerProps) {
  return <S.DividerLine width={width} />;
}
