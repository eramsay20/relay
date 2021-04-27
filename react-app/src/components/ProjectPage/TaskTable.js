import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskRow from './TaskRow';
import TaskRowForm from './TaskRowForm';

const TaskTable = () => {
    // const dispatch = useDispatch(); 
    const user = useSelector(state => state.session.user);

    return (
        <table>
            <thead>
                <tr className="task-row-titles task-row">
                    <td></td>
                    <td>Task Name</td>
                    <td>Assignee</td>
                    <td>Due Date</td>
                </tr>
            </thead>
            <tbody>
                <div className='task-row-entries'>
                    {/* LOOP TASK ROWS HERE */}
                    <TaskRow />
                    <TaskRow />
                    <TaskRow />
                    <TaskRow />
                    <TaskRow />
                    <TaskRow />
                    <TaskRow />
                    <TaskRow />
                    <TaskRow />
                    <TaskRow />
                    <TaskRow />
                    <TaskRow />
                    <TaskRow />
                    <TaskRowForm />
                </div>
            </tbody>
        </table>
    );
};

export default TaskTable;