import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { getTeamsFunction } from "../store/team";
import ProfileIcon from './ProfileIcon';

const SideBar = () => {
    const add_task_icon = require('../frontend-assets/aqua_add_icon.png')
    const dispatch = useDispatch(); 
    const user = useSelector(state => state.session.user);
    const team = useSelector(state => state.team.teams)
    useEffect(()=>{
        dispatch(getTeamsFunction())
    },[dispatch])

    const navLinks = (
        <>
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/">Tasks</NavLink>
            <NavLink className="nav-link" to="/">Projects</NavLink>
        </>
    )

    const teamList = team.map(team => (
        <>
            <p>{team.title}</p>
            <div className="profile-icon-container">
                {team.users.map(user => (
                    <ProfileIcon user={user} />
                ))}
            </div>
            <br></br>
            <br></br>
        </>
    ))

    return (
        <div className="sidebar-container">
            <div style={{ 'borderBottom':'1px solid var(--SIDEBAR_CHARCOAL_HIGHLIGHT)'}} className="sidebar-nav flex-container">
                { navLinks }
            </div>
            <div className="sidebar-teams">
                <div style={{'justifyContent': 'flex-start'}} className="flex-container">
                    <h4>Teams</h4>
                    <img style={{ 'width': '20px', 'paddingLeft': '10px'}} src={add_task_icon}></img>
                </div>
                <br></br>
                {teamList}
            </div>
        </div>
    );
};

export default SideBar;