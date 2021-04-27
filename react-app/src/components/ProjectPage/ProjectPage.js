import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import SideBar from '../SideBar';
import ProjectHeader from './ProjectHeader';
import ProjectContent from './ProjectContent';
import { project } from "../../store/project";

const ProjectPage = () => {
    const dispatch = useDispatch();
    const {project_id} = useParams()
    const currProject = useSelector(state => state.project.project)
    useEffect(() => {
        dispatch(project(parseInt(project_id)))
    }, [dispatch]);
    // const user = useSelector(state => state.session.user);
    // grab the project content here, pass as props to TableHeader & TableContent

    return (
        <div className="project-page-container">
            <div className="sidebar">
                <SideBar />
            </div>
            <div className="project-page-header flex-container">
                <ProjectHeader project={currProject}/>
            </div>
            <div className="project-page-content flex-container">
                <ProjectContent project={currProject} />
            </div>
        </div>
    );
};

export default ProjectPage;
