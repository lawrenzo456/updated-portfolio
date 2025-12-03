import React from 'react';

const FooterItem = (props: any) => {
  return (
    <div className='footerItem'>
      <a href={props.url} target='_blank'>
        <button
          type='button'
          className='footerButton'
          onClick={() => {
            console.log('click footer', props.label, props.url);
          }}
        >
          {props.label}
        </button>
      </a>
    </div>
  );
};

export default FooterItem;
