import React from 'react';
import { Button } from './styles';

const ButtonComponent = ({
  children,
  size = 'medium',
  aligment = 'left',
  onClick,
}) => {
  return (
    <Button onClick={onClick} size={size} aligment={aligment}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
