//need a project segment section too
import bodyCSS from './Body.css';

import ProjectItem from './ProjectItem.tsx';

const BodyItem = (props: any) => {
  if (props.label === 'Projects') {
    return (
      <div className='projectSection'>
        {
          //have to review the creating new project components based on an array of how many projects
        }
        <ProjectItem label='Project 1' />
        <ProjectItem label='Project 2' />
        <ProjectItem label='Project 3' />
      </div>
    );
  }
  return <div className='BodyItem'>{props.label}</div>;
};

export default BodyItem;
