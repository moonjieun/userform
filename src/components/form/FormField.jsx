import React from "react";
import * as S from "../../styles/formStyles/FormField.styles";

const FormField = ({
  label,
  type,
  value,
  onBlur,
  onChange,
  duplicateErrorMessage,
  lengthErrorMessage,
  name,
}) => {
  return (
    <>
      <S.Label>
        {label}
        <S.StyledInput
          type={type}
          name={name}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          $lengthErrorMessage={lengthErrorMessage}
          $duplicateErrorMessage={duplicateErrorMessage}
        />
      </S.Label>
      {duplicateErrorMessage && (
        <S.ErrorText style={{ color: "red" }}>
          {duplicateErrorMessage}
        </S.ErrorText>
      )}
      {lengthErrorMessage && (
        <S.ErrorText style={{ color: "red" }}>{lengthErrorMessage}</S.ErrorText>
      )}
    </>
  );
};

export default FormField;
