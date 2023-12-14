import React from "react";
import FormField from "./FormField";
import * as S from "../../styles/formStyles/FormSection.styles";

const FormSection = ({
  formField,
  index,
  onRemove,
  onBlur,
  onChange,
  duplicateError,
  lengthError,
}) => {
  return (
    <S.SectionContainer>
      <S.TitleBox>
        <h1>User-{index}</h1>
        <S.CloseBtn type="button" onClick={() => onRemove(index)}>
          x
        </S.CloseBtn>
      </S.TitleBox>
      <FormField
        label="Name"
        type="text"
        name="name"
        value={formField.name}
        onBlur={onBlur}
        onChange={(e) => onChange(e, index)}
        duplicateErrorMessage={
          duplicateError?.isError ? duplicateError.message : ""
        }
        lengthErrorMessage={lengthError?.isError ? lengthError.nameMessage : ""}
      />
      <FormField
        label="Password"
        name="password"
        type="password"
        value={formField.password}
        lengthErrorMessage={
          lengthError?.isError ? lengthError.passwordMessage : ""
        }
        onChange={(e) => onChange(e, index)}
      />
    </S.SectionContainer>
  );
};

export default FormSection;
