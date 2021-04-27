import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const TaskRowForm = () => {
    // const dispatch = useDispatch(); 
    const user = useSelector(state => state.session.user);

    return (
        <tr className="task-row task-form">
            <td id="complete"></td>
            <td id="title">Add task...</td>
            <td id="user_id">Assign...</td>
            <td style={{ 'borderRight': 'none' }} id="due-date">Due...</td>
        </tr>
    );
};

export default TaskRowForm;