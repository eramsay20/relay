import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeTeamFunction, getOneTeamFunction, getTeamsFunction, updateTeamFunction, deleteTeamFunction } from '../../store/team'
import { getUsersFunction } from '../../store/user'
const TeamForm = ( { prop } ) => {
  console.log(prop.id)
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [errors, setErrors] = useState([]);
  const [values, setValues] = useState([])
  const remove_icon = require('../../frontend-assets/remove_icon.png')
  const teams = useSelector(state => state.team)
  const users = useSelector(state => state.user.users)
  const setShowModal = prop.modal
  useEffect(()=>{
    if (prop.id) setTitle(teams[prop.id].title);
    dispatch(getUsersFunction());
  },[])
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
  const onSubmitEdit = (e) => {
    e.preventDefault();
    let error = []
    console.log(e)
    if(!title.length){
        error.push("Please submit a title.")
        setErrors(error)
    }
    if(error.length === 0){
      console.log(prop.id, title, values)
        dispatch(updateTeamFunction(prop.id, title, values))
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

  const onDelete = (e) =>{
    e.preventDefault();
    const deleteId = teams[prop.id]['id']
    console.log(deleteId)
    dispatch(deleteTeamFunction(deleteId))
    setShowModal(false)
  }
    return (
      <div>
      <form className='team-form' onSubmit={!prop.id ? onSubmit : onSubmitEdit}>
        {!prop.id ? <h2>New Team Form</h2>: <h2>Edit Team Form</h2>}
        <img src={remove_icon} style={{ 'width': '20px', 'paddingRight': '20px'}} onClick={onDelete}/>
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