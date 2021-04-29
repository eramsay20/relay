import React from "react";
import { NavLink } from 'react-router-dom'
import ProjectCard from './ProjectCard'


const ProjectDisplay = ({ projects }) => {
    const add_project_icon = require('../../frontend-assets/add_project_icon.png')
    return (
        <div className="my-project-wrap">
            <div className="project-card">
                <NavLink to={`/new_project`}>
                    <img alt="new_project_icon" src={add_project_icon}></img>
                </NavLink>
                <h5 className='min-margin'> New Project</h5>
            </div>
            {projects && projects.map(project => (
                    <ProjectCard project={project} />
                ))}
        </div>
    );
};

export default ProjectDisplay;