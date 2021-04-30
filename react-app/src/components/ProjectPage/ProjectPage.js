import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import SideBar from '../SideBar';
import ProjectHeader from './ProjectHeader';
import ProjectContent from './ProjectContent';
import { project } from "../../store/project";


const ProjectPage = () => {
    const dispatch = useDispatch();
    const {project_id} = useParams();
    const currProject = useSelector(state => state.project.project);

    useEffect(() => {
        dispatch(project(parseInt(project_id)))
    }, [dispatch]);

    return (
        <div className="project-page-container">
            <div className="sidebar">
                <SideBar />
            </div>
            <div className="project-page-header ">
                <ProjectHeader project={currProject}/>
            </div>
            <div className="project-page-content">
                <ProjectContent project={currProject} />
            </div>
        </div>
    );
};

export default ProjectPage;
