import React, {useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProject } from '../../store/project'
const ProjectDeleteForm = ( { props } ) => {
  const dispatch = useDispatch();
  const [projectId, setProjectId] = useState(0)

  let projects;
  if(props.projects.length > 0) projects = props.projects
  else projects = [{'id': 0, 'title': 'You have no projects'}]

  const setShowModal = props.modal
  const onDelete = (e) =>{
    e.preventDefault()
    const deleteId = Number(projectId)
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
