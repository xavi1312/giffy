import React from 'react';
import logo from 'assets/logo.svg';
import { Logo } from './styles';

const LogoComponent = ({ size, aligment }) => {
  return <Logo src={logo} alt='Logo image' size={size} aligment={aligment} />;
};

export default LogoComponent;
