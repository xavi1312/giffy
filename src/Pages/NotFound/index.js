import React from 'react';
import { NotFoundWrapper } from './styles';
import { Link } from 'Components/Button/styles';

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <h1>
        404 <br /> Not found
      </h1>
      <Link to='/' size='large'>
        Back to home
      </Link>
    </NotFoundWrapper>
  );
};

export default NotFound;
