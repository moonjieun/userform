import { useState } from "react";

const useFormEvent = (setShowSubmittedData) => {
  const [formFields, setFormFields] = useState([{ name: "", password: "" }]);
  const [submittedData, setSubmittedData] = useState([]);
  const [duplicateError, setDuplicateError] = useState([
    { isError: false, message: "" },
  ]);
  const [lengthError, setLengthError] = useState([
    { isError: false, nameMessage: "", passwordMessage: "" },
  ]);

  const validateLength = (value, minLength) =>
    value.length < minLength && value.length > 0;

  /**이름,비밀번호 글자수 체크 및 에러설정 함수*/
  const checkInputLength = (isName, isPassword, value, index) => {
    setLengthError((prevError) => {
      const newError = [...prevError];
      const minLength = isName ? 3 : isPassword ? 6 : 0;

      newError[index] = {
        isError: validateLength(value, minLength),
        nameMessage:
          isName && validateLength(value, minLength)
            ? "이름은 3글자 이상이어야 합니다."
            : "",
        passwordMessage:
          isPassword && validateLength(value, minLength)
            ? "비밀번호는 6글자 이상이어야 합니다."
            : "",
      };
      return newError;
    });
  };

  /**이름 중복검사 함수 */
  const duplicateCheckName = () => {
    const newErrorLogs = [...duplicateError];
    const names = formFields.map((fields) => fields.name);

    const { duplicateNameIdxs, notDuplicateNameIdxs } = names.reduce(
      (res, name, idx) => {
        const newNames = [...names.slice(0, idx), ...names.slice(idx + 1)];

        if (name.length > 0 && newNames.includes(name)) {
          res.duplicateNameIdxs.push(idx);
        } else {
          res.notDuplicateNameIdxs.push(idx);
        }
        return res;
      },
      { duplicateNameIdxs: [], notDuplicateNameIdxs: [] }
    );

    duplicateNameIdxs.forEach((idx) => {
      newErrorLogs[idx] = {
        isError: true,
        message: `The name"${names[idx]}"is duplicated.`,
      };
    });
    notDuplicateNameIdxs.forEach((idx) => {
      newErrorLogs[idx] = { isError: false, message: "" };
    });

    setDuplicateError(newErrorLogs);
    console.log("나 에러로그", newErrorLogs);
  };

  /**input에 focus가 벗어났을 때 중복검사 함수 */
  const handleBlur = () => {
    duplicateCheckName();
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const isName = name === "name";
    const isPassword = name === "password";

    checkInputLength(isName, isPassword, value, index);
    setFormFields((prevFormFields) => {
      const newFormFields = [...prevFormFields];
      newFormFields[index][name] = value;
      return newFormFields;
    });
    console.log("name, password 에러로그", lengthError);
  };

  /**Add User버튼클릭시 실행함수 */
  const addForm = () => {
    setFormFields((prevFormFields) => [
      ...prevFormFields,
      { name: "", password: "" },
    ]);
  };

  /**form_div삭제 함수 */
  const removeForm = (index) => {
    setFormFields((prevFormFields) => {
      const newFormFields = [...prevFormFields];
      if (newFormFields.length > 1) {
        newFormFields.splice(index, 1);
      }
      return newFormFields;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /**제출시 데이터 저장 */
    const submittedFormData = [...formFields];
    setSubmittedData(submittedFormData);
    //
    /**제출된 데이터 보여주기 */
    setShowSubmittedData(true);
    setTimeout(() => {
      setShowSubmittedData(false);
    }, 4000);
    //
    //초기화
    setFormFields([{ name: "", password: "" }]);
    setDuplicateError([{ isError: false, message: "" }]);
    setLengthError([{ isError: false, message: "" }]);
  };

  return {
    formFields,
    duplicateError,
    lengthError,
    submittedData,
    handleBlur,
    handleChange,
    addForm,
    removeForm,
    handleSubmit,
  };
};

export default useFormEvent;
