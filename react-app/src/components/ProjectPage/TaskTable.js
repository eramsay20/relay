import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskRow from './TaskRow';
import TaskRowForm from './TaskRowForm';
import { getTasksForProjectsFunction } from '../../store/task';
import { project } from '../../store/project';

const TaskTable = () => {
    const dispatch = useDispatch(); 
    const tasks = useSelector(state => state.task.tasks)
    const currProject = useSelector(state => state.project.project)

    let project_id;
    if ( currProject ){
        project_id = currProject.id
    }
    
    useEffect(() => {
        dispatch(project(project_id))
        dispatch(getTasksForProjectsFunction(project_id))
    }, [dispatch, project_id])
    
    let task_components = tasks.map( task => (
        <TaskRow task={task}/>
    ))

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
                    <TaskRowForm />
                </div>
            </tbody>
        </table>
    );
};

export default TaskTable;