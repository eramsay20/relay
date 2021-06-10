import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import { getProject } from "../../store/project";
import { updateProjectStatus } from '../../store/project';
import SideBar from '../SideBar';
import ProjectHeader from './ProjectHeader';
import ProjectContent from './ProjectContent';

const ProjectPage = () => {
    const dispatch = useDispatch();
    const { project_id } = useParams();
    const currProject = useSelector(state => state.project.project);
    const [projectStatus, setProjectStatus] = useState(false);

    useEffect(() => {
        dispatch(getProject(Number(project_id))) // PROJECT
    }, [dispatch, projectStatus]);

    const toggleProjectStatus = () => {
        setProjectStatus(!projectStatus)
        dispatch(updateProjectStatus(currProject))
    }

    return (
        <div className="project-page-container">
            <div className="sidebar">
                <SideBar />
            </div>
            <div className="project-page-header ">
                <ProjectHeader project={currProject} projectStatus={projectStatus} toggleProjectStatus={toggleProjectStatus}/>
            </div>
            <div className="project-page-content">
                <ProjectContent project={currProject} />
            </div>
        </div>
    );
};

export default ProjectPage;
