import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProjectHeader = () => {
    // const dispatch = useDispatch(); 
    const user = useSelector(state => state.session.user);

    return (
        <>
            <div></div>
            <div className='flex-container'>
                <img src="../../frontend-assets/task_list_icon.png" alt="task_icon"></img>
            </div>
            <div>
                <h3>TITLE FOR THE PROJECT</h3>
                <h4>STATUS BAR</h4>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </>
    );
};

export default ProjectHeader;