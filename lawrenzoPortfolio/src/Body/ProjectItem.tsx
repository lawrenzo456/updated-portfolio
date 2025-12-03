import bodyCSS from './Body.css';

const ProjectItem = (props: any) => {
  return <div className='projectSection'> Project Name: {props.label} </div>;
};
export default ProjectItem;
