import React, { useState } from "react";
import FormSection from "./FormSection";
import useFormEvent from "../../hooks/useFormEvent";
import FormUserList from "./FormUserList";
import * as S from "../../styles/formStyles/Form.styles";

const Form = () => {
  const [showSubmittedData, setShowSubmittedData] = useState(false);

  const {
    formFields,
    duplicateError,
    lengthError,
    submittedData,
    handleBlur,
    handleChange,
    addForm,
    removeForm,
    handleSubmit,
  } = useFormEvent(setShowSubmittedData);

  const isInputExist = formFields.some(
    (field) => field.name.trim() === "" || field.password.trim() === ""
  );
  const isLengthErrorExist = lengthError.some((e) => e.isError);
  const isDuplicateErrorExist = duplicateError.some((log) => log.isError);

  return (
    <>
      <S.Form onSubmit={handleSubmit}>
        {formFields.map((formField, index) => (
          <FormSection
            key={`formField-${index}`}
            formField={formField}
            index={index}
            onRemove={removeForm}
            onBlur={handleBlur}
            onChange={handleChange}
            duplicateError={duplicateError[index]}
            lengthError={lengthError[index]}
          />
        ))}
        <S.UserBtn type="button" onClick={addForm}>
          Add User
        </S.UserBtn>
        <S.UserBtn
          type="submit"
          disabled={isInputExist || isLengthErrorExist || isDuplicateErrorExist}
        >
          Confirm
        </S.UserBtn>

        {showSubmittedData && (
          <S.ListContainer>
            {submittedData.map((data, index) => (
              <FormUserList
                key={`submittedData-${index}`}
                name={data.name}
                password={data.password}
              />
            ))}
          </S.ListContainer>
        )}
      </S.Form>
    </>
  );
};

export default Form;
