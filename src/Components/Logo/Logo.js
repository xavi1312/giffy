import React from 'react';
import logo from 'assets/logo.svg';
import { Logo } from './styles';

const LogoComponent = ({ size, position }) => {
  return <Logo src={logo} alt='Logo image' size={size} position={position} />;
};

export default LogoComponent;
