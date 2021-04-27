import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const TaskRow = () => {
    // const dispatch = useDispatch(); 
    const user = useSelector(state => state.session.user);

    return (
        <tr className="task-row">
            <td className="task-complete">CHECK(Y/N)</td>
            <td className="task-title">TITLE FOR TASK HERE</td>
            <td className="task-assignee">USER_ID</td>
            <td className="task-due-date">DUE_DATE</td>
        </tr>
    );
};

export default TaskRow;