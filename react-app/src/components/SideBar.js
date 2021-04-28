import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TeamForm from './team/TeamForm'

const SideBar = () => {
    // const dispatch = useDispatch(); 
    const user = useSelector(state => state.session.user);

    return (
        <div className="sidebar-container">
            <div className="sidebar-nav flex-container">
                <h1>NAV LINKS HERE</h1>
            </div>
            <div className="sidebar-teams flex-container">
                <h1>TEAM INFO HERE</h1>
                {/* <TeamForm /> */}
                
            </div>
        </div>
    );
};

export default SideBar;