import React from "react";
import * as S from "../../styles/formStyles/FormUserList.styles";

const FormUserListInput = ({ name, password }) => {
  return (
    <S.TextContainer>
      <S.ListText>
        Name:<S.ListSpan>{name}</S.ListSpan>
      </S.ListText>
      <S.ListText>
        Password:<S.ListSpan>{password}</S.ListSpan>
      </S.ListText>
    </S.TextContainer>
  );
};

export default FormUserListInput;
