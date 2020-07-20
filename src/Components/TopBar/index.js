import React from 'react';
import { TopBar } from './styles';
import { Link } from 'react-router-dom';

const TopBarComponent = () => {
  return (
    <TopBar>
      <div>
        <Link to='/signin'>Login</Link>
        <Link to='/signup'>Register</Link>
      </div>
    </TopBar>
  );
};

export default TopBarComponent;
