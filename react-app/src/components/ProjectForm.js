import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';

const ProjectForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [errors, setErrors] = useState([]);
  const onSubmitForm = () => {
    e.preventDefault();
    if(!title.length){
      setErrors.push("Project needs a title to be created.")
    }
    else if(setErrors.length === 0){
      await dispatch()
    }
  }
  return (
    <div>
      <form onSubmit={onSubmitForm}>
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
      </form>
    </div>
  );
};

export default ProjectForm;
