import React from 'react';
import {HeaderWrapper} from './headerStyle';

interface props {
  login: string;
  sublogin: string;
}

const Header: React.FC<props> = ({login, sublogin}) => {
  return (
    <>
      <HeaderWrapper></HeaderWrapper>
    </>
  );
};

export default Header;
