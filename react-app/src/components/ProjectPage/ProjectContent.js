import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskHeader from './TaskHeader';
import TaskTable from './TaskTable';


const ProjectContent = () => {
    // const dispatch = useDispatch(); 
    const user = useSelector(state => state.session.user);

    return (
        <div className="project-task-container">
            <div className="task-header flex-container">
                <TaskHeader />
            </div>
            <div className="task-container">
                <TaskTable />
            </div>
        </div>
    );
};

export default ProjectContent;
