import React, { useState, useEffect } from 'react';
import BodyItem from './BodyItem.tsx';
import bodyCSS from './Body.css';

const Body = () => {
  //make fetch request for project data here and create body items re: project items from taht array
  const [projects, setProjects] = useState([]);

  // const fetchedProjects: any = [];
  useEffect(() => {
    async function fetchProjects() {
      try {
        //attempting to get info from the database from the project controller
        const response = await fetch('/projects');
        console.log('USE EFFECT - response: ', response);
        const data = await response.json();
        console.log('USE EFFECT - data: ', data);
        if (!response.ok) {
          throw new Error('response not retrieved');
        }
        setProjects(data);
        // console.log(projects);
      } catch (err) {
        console.log('Promise not returned: ', err);
      }
    }
    fetchProjects();
  }, []);
  //dependency: whenever we see a change in this component, we have to rerender;
  //have to review the creating new project components based on an array of how many projects

  return (
    <div >
      <h3 id='heading'> Introduction</h3>
      <BodyItem label='Introduction' />
      <h3 id='heading'> Hero Section </h3>

      <BodyItem label='Hero Section' />
      <h3 id='heading'> About Me </h3>

      <BodyItem label='About Me' />
      <h3 id='heading' className='projectSection'>
        {' '}
        Projects{' '}
      </h3>

      <BodyItem projectData={projects} label='Projects' />
      <h3 id='heading'> Contact Me </h3>

      <BodyItem label='Contact Me' />
    </div>
  );
};

export default Body;

//rendering each body item, it doesn't make sense to do state changes in each bodyitem. once the body changes, we're loading something differen t
