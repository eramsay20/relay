import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
// import { projects } from '../../store/project';

const ProjectDisplay = ({ project }) => {
    const task_list_icon = require("../../frontend-assets/task_list_icon.png")
    const user = useSelector(state => state.session.user);

    return (
        <div className="project-card">
            <NavLink to={`/projects/${project.id}`}>
                <img alt="project_icon" src={task_list_icon}></img>
            </NavLink>
            <h4> {project.title}</h4>
        </div>
    );
};

export default ProjectDisplay;