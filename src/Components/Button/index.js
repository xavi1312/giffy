import React from 'react';
import { Button } from './styles';

const ButtonComponent = ({ children, size = 'medium', onClick }) => {
  return (
    <Button onClick={onClick} size={size}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
