import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TeamList from './TeamList';
import { makeTeamFunction, getTeamsFunction, updateTeamFunction, deleteTeamFunction } from '../../store/team'

const TeamForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [errors, setErrors] = useState([]);
  const teams = useSelector(state => state.team.teams)
  const onSubmit = (e) => {
    e.preventDefault();
    let error = []
    console.log(title)
    if(!title.length){
        error.push("Please submit a title.")
        setErrors(error)
    }
    if(error.length === 0){
        dispatch(makeTeamFunction(title))
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
        dispatch(updateTeamFunction(1, title))
    }
  }
  const onDelete = (e) =>{
    e.preventDefault();
    const deleteId = teams.length
    console.log(deleteId)
    dispatch(deleteTeamFunction(deleteId))
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
export default TeamForm