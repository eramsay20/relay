import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { Modal } from '../../context/Modal';
import ProjectForm from '../ProjectForm';

const ProjectDisplay = ({ projects }) => {
    const add_project_icon = require('../../frontend-assets/add_project_icon.png');

    const [showModal, setShowModal] = useState(false);

    const onClick = e => {
        e.preventDefault();
        setShowModal(true)
    }
    return (
        <div className="my-project-wrap">
            <div className="project-card">
                <NavLink onClick={onClick} to={`/new_project`}>
                    <img alt="new_project_icon" src={add_project_icon}></img>
                </NavLink>
                {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                            <ProjectForm onClick={() => setShowModal(false)}/>
                        </Modal>
                    )}
                <h5 className='min-margin'> New Project</h5>
            </div>
            {projects && projects.map(project => (
                    <ProjectCard project={project} />
                ))}
        </div>
    );
};

export default ProjectDisplay;
