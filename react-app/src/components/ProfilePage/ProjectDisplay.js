import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
// import { projects } from '../../store/project';
import ProjectCard from './ProjectCard'

const ProjectDisplay = ({ projects }) => {
    const task_list_icon = require("../../frontend-assets/task_list_icon.png")
    const user = useSelector(state => state.session.user);

    return (
        <>
            <div className="project-card">
                <NavLink to="/new_project"><img alt="project_icon" src={task_list_icon}></img></NavLink>
                <h4> New Project</h4>
            </div>
            {projects && projects.map(project => (
                    <ProjectCard project={project} />
                ))}
        </>
    );
};

export default ProjectDisplay;