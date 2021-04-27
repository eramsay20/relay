import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProjectHeader = () => {
    // const dispatch = useDispatch(); 
    const user = useSelector(state => state.session.user);

    return (
        <>
            <img src="../../frontend-assets/task_list_icon.png" alt="task_icon"></img>
            <h2>TITLE</h2>
            <h2>STATUS</h2>
            <div></div>
            <div></div>
        </>
    );
};

export default ProjectHeader;