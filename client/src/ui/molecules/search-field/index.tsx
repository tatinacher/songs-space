import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ButtonIcon } from 'ui/atoms';
import { device } from 'constants/breakpoints';
import { Song } from 'constants/types';

import searchIcon from 'assets/icons/icons8-search.svg';

export type SearchFieldType = {
  placeholder: string;
  song: string;
  searchResult: Song[];
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  handleChange: React.ChangeEventHandler<Element>;
};

export const SearchField: React.FC<SearchFieldType> = ({
  placeholder,
  song,
  searchResult,
  onSubmit,
  handleChange,
}) => (
  <SearchBlock>
    <Search onSubmit={onSubmit}>
      <Input value={song} onChange={handleChange} placeholder={placeholder} />
      <SearchButton>
        <ButtonIcon icon={searchIcon} />
      </SearchButton>
    </Search>
    <SearchResult>
      {searchResult.map(({ title, id }) => (
        <Result to={`song/${id}`}>{title}</Result>
      ))}
    </SearchResult>
  </SearchBlock>
);

export const Search = styled.form`
  padding: 0 20px 0 0;
  position: relative;
  display: flex;
  flex-direction: column;

  & > * {
    box-sizing: border-box;
  }
`;

export const Input = styled.input`
  padding: 10px 40px 10px 15px;
  border-radius: 5px;
  border: 0;
  outline: none;
  font-size: 16px;
  margin-right: 5px;
  background: #fff;
  appearance: none;
  font-weight: 300;
  font-family: 'Roboto Mono';

  :focus {
  }

  ::placeholder {
    color: #444054;
  }

  @media ${device.desktop} {
    font-size: 20px;
    padding: 15px 25px;
  }
`;

export const SearchResult = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  position: absolute;
  top: 37px;
  z-index: 1;
  border: 1px solid #ccc;
  border-radius: 5px;
  @media ${device.desktop} {
    flex-direction: row;
  }
`;

export const Result = styled(Link)`
  min-width: 100px;
  max-height: 20px;
  background: #fff;
  color: #000;
  /* margin: 5px 0; */
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  /* animation: 1s ease-out 0s 1 slideInFromRight;
  @keyframes slideInFromRight {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  } */
`;

export const SearchBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const SearchButton = styled.div`
  position: absolute;
  top: 8px;
  right: 32px;

  @media ${device.desktop} {
    top: 12px;
    right: 35px;
  }
`;
