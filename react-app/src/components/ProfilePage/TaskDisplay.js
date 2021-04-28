import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskForm from "../task/TaskForm"

const TaskDisplay = () => {
    // const dispatch = useDispatch(); 
    const user = useSelector(state => state.session.user);

    return (
        <>
            <h1>TASKS HERE</h1>
        </>
    );
};

export default TaskDisplay;