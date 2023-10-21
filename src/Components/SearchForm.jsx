import React, { useState, useEffect } from 'react';
import { useSearchStr } from '../lib/useSearchStr';
import CustomRadio from './CustomRadio';
import styled from 'styled-components';

function SearchForm({ onSearch }) {
  const [searchStr, setsearchStr] = useSearchStr('');
  const [searchOption, setSearchOption] = useState('shows');

  // 1) mount
  // 2) render
  // 3) unmount

  console.log('Component Rerender');

  useEffect(() => {
    console.log('Componentt mount');

    return () => {
      console.log('Component Unmount');
    };
  }, [searchOption]);

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const searchStrHandler = event => {
    setsearchStr(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();

    const options = {
      q: searchStr,
      searchOption,
    };

    onSearch(options);
  };

  return (
    <form onSubmit={onSubmit}>
      <SearchInput
        type="text"
        placeholder="Search..."
        onChange={searchStrHandler}
        value={searchStr}
      />
      <RadiosWrapper>
        <CustomRadio
          label="Shows"
          type="radio"
          name="search-option"
          value="shows"
          checked={searchOption === 'shows'}
          onChange={onRadioChange}
        />

        <CustomRadio
          label="Actors"
          type="radio"
          name="search-option"
          value="actor"
          checked={searchOption === 'actor'}
          onChange={onRadioChange}
        />
      </RadiosWrapper>

      <SearchButtonWrapper>
        <button type="submit">Search</button>
      </SearchButtonWrapper>
    </form>
  );
}

export default SearchForm;

const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;
