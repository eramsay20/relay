import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { getOneTeamFunction, getTeamsFunction } from "../store/team";
import ProfileIcon from './ProfileIcon';
import { Modal } from '../context/Modal';
import TeamForm from './team/TeamForm'

const SideBar = () => {
    const add_task_icon = require('../frontend-assets/aqua_add_icon.png')
    const home_icon = require('../frontend-assets/home_icon.png')
    const dispatch = useDispatch(); 
    //VS code thinks line 14 teamState isn't being read, but it is needed to make the team sidebar update
    const teamState = useSelector(state=> state.team) //Don't delete me!
    const team = useSelector(state => state.team.teams);
    const [showModal, setShowModal] = useState(false)
    const [prop, setProp] = useState(null)

    useEffect(()=>{
        dispatch(getTeamsFunction())
    },[dispatch])

    const onNewClick = () =>{
        setProp({ modal:setShowModal })
        setShowModal(true)
    }

    const onClick = (e) =>{
        const id = parseInt(e.target.alt)
        dispatch(getOneTeamFunction(id))
        setProp({ id, modal:setShowModal })
        setShowModal(true)
    }

    const onClose = (e) => {
        setShowModal(false);
    }
    const teamList = team.map(team => (
        <>
            <div className='sidebar-team-header'>
                <p>{team.title}</p>
                <img alt={team.id} className={'add-team-button'} src={add_task_icon} onClick={onClick}></img>
            </div>
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
                <NavLink className="nav-link flex-container" to="/">
                    <img style={{ 'width': '20px', 'paddingRight': '10px' }} src={home_icon} onClick={onNewClick}></img>
                    <p style={{'paddingTop':'5px'}}>Home</p>
                </NavLink>
            </div>
            <div className="sidebar-teams">
                <div style={{'justifyContent': 'flex-start'}} className="flex-container">
                    <h4>Teams</h4>                
                </div>
                <br></br>
                {teamList}
                <div style={{ 'justifyContent': 'flex-start', 'paddingTop':'10px' }} className="flex-container">
                    <img className={'add-team-button'} src={add_task_icon} onClick={onNewClick}></img>
                    <div className='sidebar-team-header'>
                        <p>Add Team...</p>
                    </div>
                    {showModal && (
                        <Modal onClose={onClose} style={{}}>
                            <TeamForm prop={prop} />
                        </Modal>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SideBar;