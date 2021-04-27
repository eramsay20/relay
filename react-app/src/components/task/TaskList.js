import React, { useState, useEffect } from "react";
import  { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getTasksForProjectsFunction, getOneTaskFunction } from "../../store/task";

const TaskList = () =>{
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.task.tasks)
    const oneTask = useSelector(state=>state.task.task)
    console.log(oneTask)
    useEffect(()=>{
        dispatch(getTasksForProjectsFunction(1));
        dispatch(getOneTaskFunction(2))
    },[dispatch])
    if (!tasks) return (<h2>No tasks</h2>)
    if(!oneTask) return (<h2>No one Task</h2>)

    return (
        <div>
            <h2>Killroy was here</h2>
            {tasks.map((task)=>{
                console.log(task.id)
                return (
                    <h3 key={task.id}>Task List: {task.title}</h3>
                )
            })}
        </div>
    )
}
export default TaskList;