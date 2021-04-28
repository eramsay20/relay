import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskRow from '../ProjectPage/TaskRow';
import { getTasksFunction } from '../../store/task';
import { project } from '../../store/project';

const TaskDisplay = ({projects}) => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.task.tasks)
    const user = useSelector(state => state.session.user);
    
    let myTasks;
    if (tasks){
        myTasks = tasks.filter(task => task.user_id === user.id)
    }

    useEffect(() => {
        dispatch(getTasksFunction())
    }, [dispatch])

    let task_components = myTasks.map(task => (
        <TaskRow task={task} />
    ))
    
    // {
    //     projects && projects.map(project => (
    //         <ProjectCard project={project} />
    //     ))
    // }

    return (
        <table>
            <thead>
                <tr className="task-row-titles task-row">
                    <td></td>
                    <td>Task Name</td>
                    <td>Assignee</td>
                    <td style={{ 'borderRight': 'none' }}>Due Date</td>
                </tr>
            </thead>
            <tbody>
                <div className='task-row-entries'>
                    {task_components}
                </div>
            </tbody>
        </table>
    );
};

export default TaskDisplay;