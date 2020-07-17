import React from 'react';
import Loading from 'assets/spiner.svg';
import { Spiner } from './style';

const SpinerComponent = ({ size = 'normal', aligment = 'left' }) => {
  return (
    <Spiner
      size={size}
      aligment={aligment}
      src={Loading}
      alt='Loading spinner'
    />
  );
};

export default SpinerComponent;
