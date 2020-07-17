import React from 'react';
import { LogoWrapper } from './styles';
import Logo from 'Components/Logo/';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const HeroLogo = () => {
  return (
    <LogoWrapper>
      <Link to='/'>
        <Logo size='large' aligment='center' />
      </Link>
    </LogoWrapper>
  );
};

export default React.memo(HeroLogo);
