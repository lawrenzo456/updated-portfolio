//need a project segment section too
import bodyCSS from './Body.css';
import ContactForm from './ContactForm.tsx';
import { useState, useEffect } from 'react';
import ProjectItem from './ProjectItem.tsx';

const BodyItem = (props: any) => {
  if (props.label === 'Projects') {
    const [projects, updateProjects] = useState([]);

    const fetchedData: any = [];
    useEffect(() => {
      async function fetchProjects() {
        try {
          //attempting to get info from the database from the project controller
          const response = await fetch('./projects');
          const data = await response.json();
          if (!response.ok) {
            throw new Error('response not retrieved');
          }
          updateProjects(data);
          console.log(projects);
        } catch (err) {
          console.log('Promise not returned: ', err);
        }
      }
      // fetchProjects();
    }, [projects]);
    return (
      <div className='projectSection'>
        {' '}
        <p>Projects: </p>
        {
          //have to review the creating new project components based on an array of how many projects
        }
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
