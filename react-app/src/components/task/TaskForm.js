import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasksForProjectsFunction, getOneTaskFunction, makeTaskFunction, updateTaskFunction, deleteTaskFunction } from '../../store/task'
import { getOneTeamFunction } from '../../store/team';

const TaskForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [projectId, setProjectId] = useState(0);
  const [complete, setComplete] = useState(false);
  const [userId, setUserId] = useState(0);
  const [dueDate, setDueDate] = useState(null);
  const [description, setDescription] = useState('')
  const [errors, setErrors] = useState([]);
  const tasks = useSelector(state => state.task.tasks);
  useEffect(()=>{
    dispatch(getTasksForProjectsFunction(1))
    dispatch(getOneTaskFunction(2))
  },[dispatch])
  const onSubmit = (e) => {
    e.preventDefault();
    let error = [];
    if(!title.length){
        error.push("Errors.")
        setErrors(error)
    }
    if(error.length === 0){
        dispatch(makeTaskFunction(projectId, title, complete, userId, dueDate, description))
    }
  }
  const onEdit = (e) =>{
    e.preventDefault();
    let error = []
    console.log(title)
    if(!title.length){
        error.push("Please submit a title.")
        setErrors(error)
    }
    if(error.length === 0){
        dispatch(updateTaskFunction(1, projectId, title, complete, userId, dueDate, description))
    }
  }
  const onDelete = (e) =>{
    e.preventDefault();
    const deleteId = tasks.length
    console.log(deleteId)
    dispatch(deleteTaskFunction(2))
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          {errors.map(error => (
              <div>{error}</div>
          ))}
        </div>
        <div>
          <label>
            title
            <input
              type="text"
              name="title"
              onChange={e => setTitle(e.target.value)}
              value={title}
              required={true}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <form onSubmit={onEdit}>
      <div>
          {errors.map(error => (
              <div>{error}</div>
          ))}
        </div>
        <div>
          <label>
            title edit
            <input
              type="text"
              name="title"
              onChange={e => setTitle(e.target.value)}
              value={title}
              required={true}

            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <form onSubmit={onDelete}>
          <button type="submit">Delete</button>
      </form>
    </div>
  );
};
export default TaskForm