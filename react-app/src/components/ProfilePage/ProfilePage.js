import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from './SideBar';
import ProjectDisplay from './ProjectDisplay';
import TaskDisplay from './TaskDisplay';

const ProfilePage = () => {
    // const dispatch = useDispatch(); 
    const user = useSelector(state => state.session.user);

    return (
        <div className="profile-container">
            <div className="sidebar">
                <SideBar />
            </div>
            <div className="tasks flex-container">
                <TaskDisplay />
            </div>
            <div className="projects flex-container">
                <ProjectDisplay />
            </div>
        </div>
    );
};

export default ProfilePage;
