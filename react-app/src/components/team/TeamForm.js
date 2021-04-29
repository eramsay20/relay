import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TeamList from './TeamList';
import { makeTeamFunction, getOneTeamFunction, getTeamsFunction, updateTeamFunction, deleteTeamFunction } from '../../store/team'
import { getUsersFunction } from '../../store/user'
const TeamForm = ( { prop } ) => {
  console.log(prop.id)
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [errors, setErrors] = useState([]);
  const [values, setValues] = useState([])
  const team = useSelector(state => state.team.team)
  const users = useSelector(state => state.user.users)
  const setShowModal = prop.modal
  useEffect(()=>{
    dispatch(getTeamsFunction());
    if (prop.id) dispatch(getOneTeamFunction(prop.id));
    dispatch(getUsersFunction());
  },[dispatch])

  const onSubmit = (e) => {
      e.preventDefault();
      let error = []
      console.log(e)
      if(!title.length){
          error.push("Please submit a title.")
          setErrors(error)
      }
      if(error.length === 0){
          dispatch(makeTeamFunction(title, values))
      }
      if(prop) setShowModal(false)
  }
  const selectFunct = (e) =>{
    const array = Array.from(e.target.selectedOptions)
    console.log(array)
    if(array.length > 0) {
      const val = array.map((option) => option.value)
      setValues(val)
      console.log(values)
    } else {
      const val = []
      setValues(val)
    }
  }
  // const onEdit = (e) =>{
  //   e.preventDefault();
  //   let error = []
  //   console.log(title)
  //   if(!title.length){
  //       error.push("Please submit a title.")
  //       setErrors(error)
  //   }
  //   if(error.length === 0){
  //       dispatch(updateTeamFunction(1, title, [28, 29]))
  //   }
  // }
  // const onDelete = (e) =>{
  //   e.preventDefault();
  //   const deleteId = teams.length
  //   console.log(deleteId)
  //   dispatch(deleteTeamFunction(deleteId))
  // }
    return (
    <div>
      <form className='team-form' onSubmit={onSubmit}>
        {!prop.id ? <h2>New Team Form</h2>: <h2>Edit Team Form</h2>}
        <div className= 'team-form-errors'>
          {errors.map(error => (
              <div>{error}</div>
          ))}
        </div>
        <div className='title-field-div'>
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
        <div className>
            <label>
              Team Members
              <select className='user-multiselect' multiple onChange={selectFunct}>
                  {
                    users.map(user => (
                      <option type="checkbox" key={user.id} value={user.id}>{user.username}</option>
                    ))
                  }
              </select>
            </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default TeamForm