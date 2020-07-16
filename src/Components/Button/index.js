import React from 'react';
import { Button, Link } from './styles';

const ButtonComponent = ({
  children,
  size = 'medium',
  aligment = 'left',
  onClick,
  to,
}) => {
  return (
    <>
      {to ? (
        <Link to={to} size={size} aligment={aligment}>
          {children}
        </Link>
      ) : (
        <Button onClick={onClick} size={size} aligment={aligment}>
          {children}
        </Button>
      )}
    </>
  );
};

export default ButtonComponent;
