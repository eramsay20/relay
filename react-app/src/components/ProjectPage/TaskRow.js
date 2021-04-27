import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const TaskRow = () => {
    // const dispatch = useDispatch(); 
    const user = useSelector(state => state.session.user);

    return (
        <tr className="task-row">
            <td className="task-complete" style={{'text-align': 'right', 'padding-right':'12px'}}>✓</td>
            <td className="task-title">Title for task goes here</td>
            <td className="task-assignee">User assigned</td>
            <td className="task-due-date">mm-dd-yyyy</td>
        </tr>
    );
};

export default TaskRow;