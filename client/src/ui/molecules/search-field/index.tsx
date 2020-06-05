import * as React from "react";
import styled from "styled-components";
import { ButtonPrimary } from "ui/atoms";

export const SearchField: React.FC = () => {
  const onSubmit = () => {};
  return (
    <Search>
      <Input placeholder="search" />
      <ButtonPrimary onClick={onSubmit}>Search</ButtonPrimary>
    </Search>
  );
};

export const Search = styled.div`
  padding: 0 20px 0 0;
  & > * {
    box-sizing: border-box;
  }
`;

export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 5px;
  border: 0;
  font-weight: 300;
  max-width: 190px;
  outline: none;
  font-size: 16px;
  margin-right: 5px;
  background: #fff;
  appearance: none;
  :focus {
  }

  ::placeholder {
    font-weight: 100;
    color: #444054;
  }
`;
