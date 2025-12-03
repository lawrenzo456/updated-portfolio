import React from 'react';

import FooterItem from './FooterItem.tsx';
const Footer = () => {
  return (
    <div>
      Footer
      <FooterItem label='Github' url='https://github.com/lawrenzo456' />
      <FooterItem label='LinkedIn' />
      <FooterItem label='Contact Me' />
    </div>
  );
};

export default Footer;
