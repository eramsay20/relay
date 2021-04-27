import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const TaskHeader = () => {
    // const dispatch = useDispatch(); 
    const user = useSelector(state => state.session.user);

    return (
        <>
            <h1>TASK HEADER HERE</h1>
        </>
    );
};

export default TaskHeader;