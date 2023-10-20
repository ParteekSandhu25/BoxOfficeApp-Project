import React, { useState, useEffect } from 'react';
import { useSearchStr } from '../lib/useSearchStr';
import CustomRadio from './CustomRadio';

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
      <input type="text" onChange={searchStrHandler} value={searchStr} />
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

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
