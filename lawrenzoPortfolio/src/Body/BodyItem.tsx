//need a project segment section too
import './Body.css';
import ContactForm from './ContactForm.tsx';
// import { useState, useEffect } from 'react';
import ProjectItem from './ProjectItem.tsx';
// import ProjectItem from './ProjectItem.tsx';

const BodyItem = (props: any) => {
  if (props.label === 'Projects') {
    console.log('bodyitem props data: ', props.projectData);
    const projectArray = [];
    for (let i = 0; i < props.projectData.length; i++) {
      projectArray.push(
        <ProjectItem
          keys={props.projectData[i]['id']}
          projectData={props.projectData[i]}
        />
      );
    }
    console.log('project array: ', projectArray);
    // return <ProjectItem projectData={props.projectData} />;
    return <div>{projectArray}</div>;
  }
  if (props.label === 'Contact Me') {
    return (
      <div>
        <p>Contact Me!</p>
        <ContactForm />
      </div>
    );
  }
  return <div className='bodyItem'>{props.label}</div>;
};

export default BodyItem;
