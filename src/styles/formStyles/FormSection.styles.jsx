import styled from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid;
  padding: 40px;
  margin-bottom: 25px;
`;

export const TitleBox = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseBtn = styled.button`
  background-color: white;
  border: 2px solid;
  padding: 0 5px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;
