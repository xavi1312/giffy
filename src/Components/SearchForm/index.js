import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSeachForm } from './useSeachForm';
import Button from 'Components/Button';
import { Form, Select } from './styles';

const RAITINGS = ['g', 'pg', 'pg-13', 'r'];

const SearchForm = ({ initialKeyword = '', initialRaiting = 'g' }) => {
  const { keyword, raiting, updateKeyword, updateRaiting } = useSeachForm({
    initialKeyword,
    initialRaiting,
  });
  const history = useHistory();

  const handleChangeKeyword = e => {
    updateKeyword(e.target.value);
  };
  const handleChangeRaiting = e => {
    updateRaiting(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    history.push(`/search/${keyword}/${raiting}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Button>Search</Button>
      <input
        type='text'
        value={keyword}
        name='keyword'
        placeholder='Search your gif...'
        onChange={handleChangeKeyword}
      />
      <Select onChange={handleChangeRaiting} defaultValue={initialRaiting}>
        {RAITINGS.map(raiting => {
          return (
            <option key={raiting} value={raiting}>
              {raiting}
            </option>
          );
        })}
      </Select>
    </Form>
  );
};

export default SearchForm;
