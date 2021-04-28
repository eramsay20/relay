import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { project } from "../../store/project";

const ProjectHeader = ({project}) => {
    // const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const completed = project?.complete === true ? 'Completed' : 'In Progress'
    const task_list_icon = require("../../frontend-assets/task_list_icon.png")
    return (
        <>
            <div></div>
            <div className='flex-container' style={{ 'width': '100%', 'height':'100%', 'transform':'scale(.7)' }}>
                <img src={task_list_icon} alt="task_icon"></img>
            </div>
            <div style={{ 'text-transform': 'capitalize' }}>
                <h3>{project?.title}</h3>
                <h4>{completed}</h4>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </>
    );
};

export default ProjectHeader;
