import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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