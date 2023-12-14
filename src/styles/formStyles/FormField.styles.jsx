import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  height: 30px;
  border: ${({ $lengthErrorMessage, $duplicateErrorMessage }) =>
    $lengthErrorMessage || $duplicateErrorMessage
      ? "2px solid red"
      : "1px solid #ccc"};
  background-color: ${({ $lengthErrorMessage, $duplicateErrorMessage }) =>
    $lengthErrorMessage || $duplicateErrorMessage ? "lightyellow" : "white"};
`;

export const ErrorText = styled.p`
  color: red;
`;
