import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskForm from "../task/TaskForm"
import TeamForm from "../team/TeamForm"

const TaskDisplay = () => {
    // const dispatch = useDispatch(); 
    const user = useSelector(state => state.session.user);

    return (
        <>
            <h1>TASKS HERE</h1>
            <TeamForm />
            {/* <TaskForm /> */}
        </>
    );
};

export default TaskDisplay;