import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskRow from './TaskRow';
import TaskRowForm from './TaskRowForm';
import { getTasksFunction, getTasksForProjectsFunction } from '../../store/task';
import { useModalState } from "../../context/ModalState";
import { project } from '../../store/project';

const TaskTable = () => {
    const dispatch = useDispatch();
    const { showState, closeModal } = useModalState();


    const tasks = useSelector(state => state.task.tasks);
    const currProject = useSelector(state => state.project.project);
    const [lastTask, setLastTask] = useState('');
    const [currentTask, setCurrentTask] = useState(null)

    const onClick = (id) => () => {
        setCurrentTask(id)
    };
    let projectId;
    if (currProject) projectId = currProject.id

    let project_tasks = tasks.filter(task => task.project_id === projectId)

    useEffect(() => {
        dispatch(project(projectId))
        dispatch(getTasksFunction())
    }, [dispatch, projectId, lastTask])

    let task_components = project_tasks.map( task => (
        <TaskRow task={task} key={task.id} currentTask={currentTask} onClick={onClick}/>
    ))

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
                    <TaskRowForm project={currProject} tastTask={lastTask} setLastTask={setLastTask}/>
                </div>
            </tbody>
        </table>
    );
};

export default TaskTable;
