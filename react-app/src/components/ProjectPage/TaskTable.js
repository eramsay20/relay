import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskRow from './TaskRow';
import TaskRowForm from './TaskRowForm';
import { getTasksFunction, deleteTaskFunction } from '../../store/task';
import { getUsersFunction } from '../../store/user';
import { getProject } from '../../store/project';

const TaskTable = ({ projectProp }) => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.task.tasks);
    const all_users = useSelector(state => state.user.users)
    const [lastTask, setLastTask] = useState('');
    const [currentTask, setCurrentTask] = useState(null)
    const [lastDeletedTask, setLastDeletedTask] = useState('')
    const onClick = (id) => () => { setCurrentTask(id) };

    const deleteTask = (taskId) => {
        dispatch(deleteTaskFunction(taskId))
        setLastDeletedTask(taskId)
    }

    let project_tasks, task_components;
    if(projectProp){
        project_tasks = tasks.filter(task => task.project_id === projectProp.id)
        task_components = project_tasks.map(task => (
            <TaskRow users={all_users} task={task} key={task.id} currentTask={currentTask} onClick={onClick} deleteTask={deleteTask} setLastTask={setLastTask} />
        ))
    } 

    useEffect(() => {
        if(projectProp) dispatch(getProject(projectProp.id))
        dispatch(getUsersFunction())
        dispatch(getTasksFunction())
    }, [dispatch, lastTask, lastDeletedTask])


    return (
        <table onClick={onClick}>
            <thead>
                <tr className="task-row-titles task-row">
                    <td style={{ 'borderRight': 'none' }}></td>
                    <td>Task Name</td>
                    <td>Assignee</td>
                    <td style={{ 'borderRight': 'none' }}>Due Date</td>
                </tr>
            </thead>
            <tbody>
                <div className='task-row-entries'>
                    {task_components}
                    <TaskRowForm users={all_users} project={projectProp} tastTask={lastTask} setLastTask={setLastTask}/>
                </div>
            </tbody>
        </table>
    );
};

export default TaskTable;
