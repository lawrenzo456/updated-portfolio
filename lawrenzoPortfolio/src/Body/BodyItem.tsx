//need a project segment section too
import './Body.css';
import ContactForm from './ContactForm.tsx';
import { useState, useEffect } from 'react';
import ProjectItem from './ProjectItem.tsx';

const BodyItem = (props: any) => {
  if (props.label === 'Projects') {
    console.log(props.projectData);


    return (
      <div className='projectSection'>
        <p>Projects: </p>
        {/* {console.log(projectData)} */}

        <ProjectItem label='Project 1' />
      </div>
    );
  }
  if (props.label === 'Contact Me') {
    return (
      <div>
        <p>Contact Me!</p>
        <ContactForm />
      </div>
    );
  }
  return <div className='BodyItem'>{props.label}</div>;
};

export default BodyItem;
