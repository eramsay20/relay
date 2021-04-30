import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { makeTaskFunction } from '../../store/task'

const TaskRowForm = ({users, project, lastTask, setLastTask}) => {
    const add_task_icon = require('../../frontend-assets/aqua_add_icon.png')
    const dispatch = useDispatch(); 
    const [title, setTitle] = useState('');
    const [userId, setUserId] = useState('');
    const [dueDate, setDueDate] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(makeTaskFunction(project.id, title, false, userId, dueDate, 'Add description...'))
        lastTask = title
        setLastTask(lastTask)
        setTitle('')
        setUserId('')
        setDueDate(null)
        }
        
    let project_id;
    if(project) project_id = project.id

    let people;
    if (users) people = users.map(user => user.username)

    const select_options = people.map((person, idx) => (
        <option name="user_id" value={idx+1}>{person}</option>
    ))

    const today = new Date()

    return (
        <form className="task-form-container" onSubmit={onSubmit}>
            <button className="task-form-button" type='submit'>
                <img style={{ 'width': '20px', 'paddingLeft': '18px' }} src={add_task_icon}></img>
            </button>
            <input
                className="task-form-input"
                type="text"
                name="title"
                onChange={e => setTitle(e.target.value)}
                value={title}
                required={true}
                placeholder='Add task...'
            />
            <select className="task-form-select" value={userId} onChange={e => setUserId(e.target.value)}>
                <option value={''}></option>
                {select_options}
            </select>
            <input
                style={{ 'borderRight': 'none' }}
                className="task-form-input"
                type="date"
                name="due_date"
                onChange={e => setDueDate(e.target.value)}
                value={dueDate}
            />
        </form>
    );
};

export default TaskRowForm;