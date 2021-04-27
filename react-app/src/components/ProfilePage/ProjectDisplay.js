import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
// import { projects } from '../../store/project';

const ProjectDisplay = ({ projects }) => {

    const user = useSelector(state => state.session.user);

    return (
        <>
            <NavLink to="/new_project">CREATE NEW PROJECT</NavLink>
            {projects && projects.map(project => (
                <NavLink to={`/projects/${project.id}`}>{project.title}</NavLink>
                ))}
        </>
    );
};

export default ProjectDisplay;