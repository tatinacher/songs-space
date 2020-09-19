import * as React from 'react';
import styled from 'styled-components';
import { ButtonIcon } from 'ui/atoms';
import {
  $searchRequest,
  $searchResponse,
  handleChange,
  submitForm,
} from 'features/search';
import { useStore } from 'effector-react';
import { Link } from 'react-router-dom';
import { device } from 'constants/breakpoints';
import searchIcon from 'assets/icons/icons8-search.svg';

export const SearchField: React.FC<{ placeholder: string }> = ({
  placeholder,
}) => {
  const song = useStore($searchRequest);
  const searchResult = useStore($searchResponse);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitForm(event);
  };
  return (
    <SearchBlock>
      <Search onSubmit={onSubmit}>
        <Input value={song} onChange={handleChange} placeholder={placeholder} />
        <SearchButton>
          <ButtonIcon icon={searchIcon} />
        </SearchButton>
      </Search>
      <SearchResult>
        {searchResult.map(({ title, _id }) => (
          <Result to={`song/${_id}`}>{title}</Result>
        ))}
      </SearchResult>
    </SearchBlock>
  );
};

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
  @media ${device.desktop} {
    flex-direction: row;
  }
`;

export const Result = styled(Link)`
  min-width: 100px;
  max-height: 20px;
  background: #fff;
  color: #000;
  margin: 10px;
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
