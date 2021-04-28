import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeTaskFunction } from '../../store/task'
import { getTasksFunction } from '../../store/task';
import { getUsersFunction } from '../../store/user' 

const TaskRowForm = ({project, lastTask, setLastTask}) => {
    const dispatch = useDispatch(); 
    const user = useSelector(state => state.session.user);
    const all_users = useSelector(state => state.user.users)

    const [complete, setComplete] = useState(false);
    const [title, setTitle] = useState(null);
    const [assignee, setAssignee] = useState(null);
    const [due, setDue] = useState(null);

    useEffect(() => {
        dispatch(getUsersFunction())
    }, [dispatch])

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(makeTaskFunction(project.id, title, false, user.id, due, 'Add description...'))
        // dispatch(makeTaskFunction(projectId, title, complete, userId, dueDate, description))
        lastTask = title
        setLastTask(lastTask)
        setTitle('')
        setAssignee(null)
        setDue(null)
        }
    let project_id;

    if(project){
        project_id = project.id
    }

    if (all_users){
        console.log(all_users)
    }

    const people = ['Eric', 'Mauro', 'Robert']

    const select_options = people.map((person, idx) => (
        <option value={idx}>{person}</option>
    ))

    const today = new Date()

    return (
        <form onSubmit={onSubmit}>
            <button type='submit'>+</button>
            <input
                type="text"
                name="title"
                onChange={e => setTitle(e.target.value)}
                value={title}
                required={true}
                placeholder='Add task...'
            />
            <select value={assignee} required={false} onChange={e => setAssignee(e.target.value)}>
                <option value={null}></option>
                {select_options}
            </select>
            <input
                type="date"
                name="due_date"
                onChange={e => setDue(e.target.value)}
                value={due}
                default={today}
                placeholder={today}
            />
        </form>
    );
};

export default TaskRowForm;