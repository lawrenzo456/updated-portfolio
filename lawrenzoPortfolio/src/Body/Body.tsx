import React from 'react';
import BodyItem from './BodyItem.tsx';
import bodyCSS from './Body.css';

const Body = () => {
  return (
    <div>
      <BodyItem label='Introduction' />
      <BodyItem label='Hero Section' />
      <BodyItem label='About Me' />
      <BodyItem label='Projects' />
      <BodyItem label='Contact Me' />
    </div>
  );
};

export default Body;
