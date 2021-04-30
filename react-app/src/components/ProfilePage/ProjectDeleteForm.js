import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProject } from '../../store/project'
const ProjectDeleteForm = ( { prop } ) => {
  console.log(prop)
  const dispatch = useDispatch();
  const [projectId, setProjectId] = useState(0)
  let projects;
  console.log(prop)
  if(prop.project){
    projects = prop.project
  } else {
    projects = [{'title': 'You have no projects'}]
  }
  const setShowModal = prop.modal
  const onDelete = (e) =>{
    e.preventDefault();
    console.log(e)
    const deleteId = projectId
    console.log(deleteId)
    dispatch(deleteProject(deleteId))
    setShowModal(false)
  }
    return (
      <div>
      <form className='project-delete-form' onSubmit={onDelete}>
        <h2>Delete Project Form</h2>
        <div>
            <label>
              Projects
              <select className='project-select' onChange={e => setProjectId(e.target.value)}>
                  {
                    projects.map(project => (
                      <option type="checkbox" key={project.id} value={project.id}>{project.title}</option>
                    ))
                  }
              </select>
            </label>
        </div>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};
export default ProjectDeleteForm