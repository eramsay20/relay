import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { postProject, projects } from '../store/project';
import { useHistory } from "react-router-dom";

const ProjectForm = ({onClick}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [team, setTeam] = useState(1);
  const [errors, setErrors] = useState([]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if(!title.length){
      setErrors(["Project needs a title to be created."])
    }else {
      dispatch(postProject({title: title, team:team}))
      onClick()
      // history.push("/")
    }

  }

  const team_options = ['Finance', 'HR', 'Engineering', 'Sales']
  const select_insert = team_options.map((team, idx) => (
    <option value={idx}>{team}</option>
  ))

  return (
    <div className="flex-container">
      <form onSubmit={onSubmitForm}>
        <h1>New Project</h1>
        <div>
          {errors.map(error => (
              <div>{error}</div>
          ))}
        </div>
        <div>
          <label>
            Project Name
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
          <label>
            Team Assigned
            <select
              name="team_id"
              onChange={e => setTeam(e.target.value)}
              value={team}
              required={false}
            >
              {select_insert}
            </select>
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
