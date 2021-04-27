import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import SideBar from '../SideBar';
import ProjectHeader from './ProjectHeader';
import ProjectContent from './ProjectContent';

const ProjectPage = () => {
    // const dispatch = useDispatch(); 
    const project_id = useParams()
    const all_projects = useSelector(state => state.project.projects)
    const project = all_projects.find(project => project.id === project_id)
    // const user = useSelector(state => state.session.user);
    // grab the project content here, pass as props to TableHeader & TableContent

    return (
        <div className="project-page-container">
            <div className="sidebar">
                <SideBar />
            </div>
            <div className="project-page-header flex-container">
                <ProjectHeader project={project}/>
            </div>
            <div className="project-page-content flex-container">
                <ProjectContent project={project} />
            </div>
        </div>
    );
};

export default ProjectPage;
