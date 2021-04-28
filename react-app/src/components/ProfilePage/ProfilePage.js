import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from '../SideBar';
import ProjectDisplay from './ProjectDisplay';
import TaskDisplay from './TaskDisplay';
import { projects } from '../../store/project';

const ProfilePage = () => {
    const dispatch = useDispatch(); 
    const user = useSelector(state => state.session.user);
    const current_projects = useSelector(state => state.project.projects)

    useEffect(() => {
        dispatch(projects())
    }, [dispatch])

    return (
        <div className="profile-container">
            <div className="sidebar">
                <SideBar />
            </div>
            <div className="tasks flex-container">
                <TaskDisplay />
            </div>
            <div>
                <div className="flex-container">
                    <h3>Recent Projects</h3>
                </div>
                <div className="projects">
                    <ProjectDisplay projects={current_projects}/>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
