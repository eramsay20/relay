import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from '../SideBar';
import ProjectDisplay from './ProjectDisplay';
import TaskDisplay from './TaskDisplay';
import { projects } from '../../store/project';
import TaskForm from "../task/TaskForm";

const ProfilePage = () => {
    const dispatch = useDispatch(); 
    const user = useSelector(state => state.session.user);
    const current_projects = useSelector(state => state.project.projects)

    useEffect(() => {
        dispatch(projects())
    }, [dispatch])

    const divider = (
        <hr
            style={{
                'color': 'var(--GREY_TEXT_LABELS)',
                'backgroundColor': 'green',
                'height': '15',
                'marginLeft': '200px',
                'marginRight': '200px'
            }}
        />
    );

    return (
        <div className="profile-container">
            <div className="sidebar">
                <SideBar />
            </div>
            <div>
                <div className="flex-container">
                    <h3 className="min-margin">My Tasks</h3>
                </div>
                <div className="my-tasks">
                    <TaskDisplay projects={current_projects}/>
                    <TaskForm />
                </div>
            </div>
            <div>
                <div className="flex-container">
                    <h3 className="min-margin">My Projects</h3>
                </div>
                {divider}
                <div className="my-projects">
                    <ProjectDisplay projects={current_projects}/>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
