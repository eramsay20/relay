import React from "react";
import { NavLink } from 'react-router-dom'

const ProjectDisplay = ({ project }) => {
    const task_list_icon = require("../../frontend-assets/task_list_icon.png")

    return (
        <div className="project-card">
            <NavLink to={`/projects/${project.id}`}>
                <img alt="project_icon" src={task_list_icon}></img>
            </NavLink>
            <h5 className='min-margin'> {project.title}</h5>
        </div>
    );
};

export default ProjectDisplay;