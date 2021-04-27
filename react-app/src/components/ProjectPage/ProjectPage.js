import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from '../SideBar';
import ProjectHeader from './ProjectHeader';
import ProjectContent from './ProjectContent';

const ProjectPage = () => {
    // const dispatch = useDispatch(); 
    const user = useSelector(state => state.session.user);
    // grab the project content here, pass as props to TableHeader & TableContent
    
    return (
        <div className="project-page-container">
            <div className="sidebar">
                <SideBar />
            </div>
            <div className="project-page-header flex-container">
                <ProjectHeader />
            </div>
            <div className="project-page-content flex-container">
                <ProjectContent />
            </div>
        </div>
    );
};

export default ProjectPage;
