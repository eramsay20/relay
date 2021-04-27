import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { postProject } from '../store/project';
import CommentForm from "./CommentForm"

const ProjectForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [errors, setErrors] = useState([]);
  const onSubmitForm = (e) => {
    e.preventDefault();
    if(!title.length){
      setErrors(["Project needs a title to be created."])
    }else {
      dispatch(postProject({title: title}))
    }
  }
  return (
    <div>
      <CommentForm />
      <form onSubmit={onSubmitForm}>
        <div>
          {errors.map(error => (
              <div>{error}</div>
          ))}
        </div>
        <div>
          <label>
            Title
            <input
              type="text"
              name="title"
              onChange={e => setTitle(e.target.value)}
              value={title}
              required={true}
            />
          </label>
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
