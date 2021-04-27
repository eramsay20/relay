import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const TaskHeader = () => {
    // const dispatch = useDispatch(); 
    const user = useSelector(state => state.session.user);

    return (
        <>
            <div className="add-task flex-container">
                <button>Add Task</button>
            </div>
            <div></div>
            <div className="task-filter flex-container">
                <button>Filter</button>
            </div>
            <div className="task-sort flex-container">
                <button>Sort</button>
            </div>
            <div></div>
        </>
    );
};

export default TaskHeader;