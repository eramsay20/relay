import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProject } from '../../store/project'
const ProjectDeleteForm = ( { prop } ) => {
  console.log(prop)
  const dispatch = useDispatch();
  const [projectId, setProjectId] = useState(0)
  let projects;
  console.log(prop)
  if(prop.project.length > 0){
    projects = prop.project
  } else {
    projects = [{'id': 0, 'title': 'You have no projects'}]
  }
  const setShowModal = prop.modal
  const onDelete = (e) =>{
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
              <select className='project-select' value={projectId} onChange={e => setProjectId(e.target.value)}>
                  <option value={''}></option>
                  {
                    projects.map(project => (
                      <option key={project.id} value={project.id}>{project.title}</option>
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