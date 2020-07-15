import React, { useState } from 'react';
import Button from 'Components/Button';
import { useHistory } from 'react-router-dom';

const SearchForm = () => {
  const [keyword, setKeyword] = useState();
  const history = useHistory();

  const handleChange = e => {
    setKeyword(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();

    console.log(keyword);
    history.push(`/search/${keyword}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button>Search</Button>

      <input type='text' name='keyword' onChange={handleChange} />
    </form>
  );
};

export default SearchForm;
