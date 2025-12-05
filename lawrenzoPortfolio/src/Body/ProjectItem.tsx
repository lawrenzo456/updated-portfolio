// import './Body.css';

const ProjectItem = (props: any) => {
  // console.log(props.projectData);

  return (
    <div className='projectCard'>
      <div className='projectTitle'>
        <h4>Project Name: {props.projectData['project_title']}</h4>

        <p className='projectDesc'>
          {props.projectData['project_description']}
        </p>

        <p>
          <a href={props.projectData['project_link']} target='_blank'>
            Link
          </a>
        </p>
      </div>
    </div>
  );
};
export default ProjectItem;
