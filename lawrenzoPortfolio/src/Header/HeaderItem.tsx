import React from 'react';

const HeaderItem = (props: any) => {
  return (
    <div className='headerItem'>
      <button
        type='button'
        className='headerButton'
        onClick={() => {
          console.log('click header', props.label, props.url);
        }}
      >
        {props.label}
      </button>
    </div>
  );
};

export default HeaderItem;
