import React, { useState, useEffect } from "react";
import  { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getTeamsFunction, getOneTeamFunction } from "../../store/team";

const TeamList = () =>{
    const dispatch = useDispatch();
    const teams = useSelector(state => state.team.teams)
    const oneTeam = useSelector(state=>state.team.team)
    console.log(oneTeam)
    useEffect(()=>{
        dispatch(getTeamsFunction());
        dispatch(getOneTeamFunction(1))
    },[dispatch])
    if (!teams) return (<h2>No teams</h2>)
    if(!oneTeam) return (<h2>No one Team</h2>)

    return (
        <div>
            <h3>Single Team</h3>
            {teams.map((team)=>{
                console.log(team.id)
                return (
                    <h3 key={team.id}>Team List: {team.title}</h3>
                )
            })}
        </div>
    )
}
export default TeamList;
