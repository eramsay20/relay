import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeamsFunction } from "../store/team";
import TeamForm from './team/TeamForm'

const SideBar = () => {
    const dispatch = useDispatch(); 
    const user = useSelector(state => state.session.user);
    const team = useSelector(state => state.team.teams)
    useEffect(()=>{
        dispatch(getTeamsFunction())
    },[dispatch])
    const teamList = team.map(team => (
        <>
        <h2>{team.title}</h2>
        <p>{team.users.map(user => user.username)}</p>
        </>
    ))
    return (
        <div className="sidebar-container">
            <div className="sidebar-nav flex-container">
                
            </div>
            <div className="sidebar-teams">
                {teamList}
                
            </div>
        </div>
    );
};

export default SideBar;