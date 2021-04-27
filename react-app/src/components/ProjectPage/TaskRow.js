import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const TaskRow = () => {
    
    const incomplete_check = require('../../frontend-assets/grey_checkmark.png')
    const complete_check = require('../../frontend-assets/aqua_checkmark.png')
    const user = useSelector(state => state.session.user);

    return (
        <tr className="task-row">
            <td className="flex-container">
                <img style={{'width':'20px', 'paddingLeft':'10px'}} src={incomplete_check}></img>
            </td>
            <td className="task-title">Title for task goes here</td>
            <td className="task-assignee">User assigned</td>
            <td style ={{'borderRight':'none'}} className="task-due-date">mm-dd-yyyy</td>
        </tr>
    );
};

export default TaskRow;