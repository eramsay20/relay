import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskHeader from './TaskHeader';
import TaskTable from './TaskTable';


const ProjectContent = ({ project }) => {
    const user = useSelector(state => state.session.user);
    const [tasksChange, changeTasks ] = useState(0)
    return (
        <div className="project-task-container">
            <div className="task-header flex-container">
                <TaskHeader project={project}/>
            </div>
            <div className="task-container">
                <TaskTable tasksChange={tasksChange} changeTasks={changeTasks} project={project}/>
            </div>
        </div>
    );
};

export default ProjectContent;
