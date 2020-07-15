import React, { useState } from 'react';
import Button from 'Components/Button';
import { useHistory, useParams } from 'react-router-dom';
import { Form } from './styles';

const SearchForm = () => {
  const initialKeyword = useParams().keyword;
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
        value={initialKeyword}
        name='keyword'
        onChange={handleChange}
      />
    </Form>
  );
};

export default SearchForm;
