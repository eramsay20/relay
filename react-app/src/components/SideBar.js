import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { getTeamsFunction } from "../store/team";
import TeamForm from './team/TeamForm'

const SideBar = () => {
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
            <h4>{team.title}</h4>
            <p>{team.users.map(user => user.username[0].toUpperCase()+", ")}</p>
            <br></br>
        </>
    ))

    return (
        <div className="sidebar-container">
            <div className="sidebar-nav flex-container">
                { navLinks }
            </div>
            <div className="sidebar-teams">
                {teamList}
                
            </div>
        </div>
    );
};

export default SideBar;