import * as React from "react";
import styled from "styled-components";
import { ButtonPrimary } from "../../atoms";

export const SearchField: React.FC = () => (
  <Search>
    <Input placeholder="search" />
    <ButtonPrimary>Search</ButtonPrimary>
  </Search>
);

export const Search = styled.div`
  padding: 0 20px 0 0;
  display: flex;
  & > * {
    box-sizing: border-box;
  }
`;

export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 5px;
  border: 0;
  outline: none;
  font-size: 16px;
  margin-right: 5px;

  :focus {
    border: 4px solid var(--accent);
  }

  ::placeholder {
    font-weight: 100;
  }
`;
