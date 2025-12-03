import React from 'react';

import HeaderItem from './HeaderItem.tsx';
const Header = () => {
  return (
    <div>
      Header
      <HeaderItem label='About Me'  />
      <HeaderItem label='Projects'  />
      <HeaderItem label='Contact Me'  />
    </div>
  ); 
};

export default Header;
