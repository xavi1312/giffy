import React, { useState } from 'react';
import Button from 'Components/Button';
import { useHistory } from 'react-router-dom';
import { Form } from './styles';

const SearchForm = ({ initialKeyword = '' }) => {
  const [keyword, setKeyword] = useState(initialKeyword);
  const history = useHistory();

  const handleChange = e => {
    setKeyword(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();

    history.push(`/search/${keyword}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Button>Search</Button>
      <input
        type='text'
        value={keyword}
        name='keyword'
        placeholder='Search your gif...'
        onChange={handleChange}
      />
    </Form>
  );
};

export default SearchForm;
