import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { comments, deleteComment } from '../../store/comment';
import { deleteTaskFunction, updateTaskFunction } from '../../store/task';
import CommentForm from "../CommentForm"

const TaskDetails = ({ users, assignee, task, date, onClick}) => {
    const profile_icon_violet = require('../../frontend-assets/profile_icon_violet.png');

    const history = useHistory()
    const {project_id} = useParams()

    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const taskComment = useSelector(state => state.comment.comments);

    const [showMenu, setShowMenu] = useState(null);
    const [currComment, setCurrComment] = useState(null);

    // EDIT FORM -- COVERED INPUTS
    const [titleInput, setTitleInput] = useState(task.title);
    const [assigneeIdInput, setAssigneeIdInput] = useState(task.user_id);
    const [dueInput, setDueInput] = useState(task.due_date);
    const [descriptionInput, setDescriptionInput] = useState(task.description);
    // console.log(date)
    console.log(task)

    const openMenu = e => {
        e.preventDefault();
        if(showMenu){
            setShowMenu(null);
            return;
        }else {
            setShowMenu(e.target.id);
            return;
        };
    };

    const onEditTask = () => {
        let taskId = task.id;
        let projectId = project_id;
        let title = task.title;
        let complete = task.complete;
        let userId = assigneeIdInput;
        let dueDate = dueInput;
        let description = descriptionInput;

        dispatch(updateTaskFunction(taskId, projectId, title, complete, userId, dueDate, description))
        onClick(null)
        history.push(`/projects/${project_id}`)
    }

    const onDeleteTask = () => {
        dispatch(deleteTaskFunction(task.id))
        onClick(null)
    }

    const onDeleteSelect = (id) => () => {
        dispatch(deleteComment(id));
        dispatch(comments(task.id))
    };

    const onEdit = (comment) => () => {
        setCurrComment(comment);
    };

    useEffect(() => {
        dispatch(comments(task.id))
    }, [dispatch]);

    const due = date(task.due_date);
    let people;
    if (users) people = users.map(user => user.username)

    const select_options = people.map((person, idx) => (
        <option key={`${person}-${idx}`} name="user_id" value={idx + 1}>{person}</option>
    ))
    

 return (
     <div className="taskDetailContainer">
         <div style={{ 'justifyContent': 'flex-start', 'borderBottom':'2px solid var(--GREY_HIGHLIGHT)' }} className='flex-container min-margin'>
             <div className='nav-link' onClick={onClick(null)}>Exit</div>
             <div className='nav-link' onClick={onEditTask}>Update</div>
             <div className='nav-link' onClick={onDeleteTask}>Delete</div>
         </div>
         <div >
            <h2 className="min-margin capitalize" >{task.title}</h2>
            <div className="taskDetailContent">
                <form className='task-detail-form' onSubmit={onEditTask}>
                     <label>
                         <h3>Task Title</h3>
                         <input type='text' name='titleInput' value={titleInput} onChange={e => setTitleInput(e.target.value)} ></input>
                     </label>
                    <label>
                         <h3>Assignee</h3>
                         <select className="task-form-select" value={assigneeIdInput} onChange={e => setAssigneeIdInput(e.target.value)}>
                             <option value={""}></option>
                             {select_options}
                         </select>
                    </label>
                     <label>
                         <h3>Due Date</h3>
                         <input type='date' name='dueInput' value={dueInput} onChange={e => {
                            setDueInput(e.target.value)
                            console.log(e.target.value)
                            console.log(dueInput)
                         }}></input>
                     </label>
                     <label>
                         <h3>Description</h3>
                     </label>
                     <textarea value={descriptionInput} onChange={e => setDescriptionInput(e.target.value)}></textarea>
                </form>
                 {/* <div className='flex-container' style={{ 'justifyContent': 'flex-start' }}>
                     <h4 className="min-margin capitalize">Assignee</h4>
                     <p className="capitalize min-margin" style={{ 'marginLeft': '50px' }}>{assignee}</p>
                </div>
                 <div className='flex-container' style={{ 'justifyContent': 'flex-start' }}>
                     <h4 className="min-margin capitalize">Due Date</h4>
                     <p className='min-margin' style={{ 'marginLeft': '50px' }}>{due}</p>
                </div>
                <div>
                    <h4>Description</h4>
                     <p style={{ 'backgroundColor': 'var(--GREY_HIGHLIGHT)', 'padding':'20px', 'borderRadius':'5px', 'marginRight':'20px' }}>{task.description}</p>
                </div> */}
                <div>
                     <h4 style={{ 'marginTop': '30px' }}>Comments</h4>
                    {taskComment && Object.keys(taskComment).map(id => (
                        <div key={id} style={{"padding": "10px", "height":"50px"}}>
                            <img style={{ 'width': '30px', 'paddingLeft': '10px' }} src={profile_icon_violet}></img>
                            <span className="commentInitial">{taskComment[id]?.user?.split('')[0].toUpperCase()}</span>
                            <p className="commentText">{taskComment[id]?.comment}</p>
                            {taskComment[id]?.user_id === user.id &&
                                (<div onClick={openMenu}>
                                    <div id={taskComment[id].id} onClick={openMenu} className="dropDownDiv nav-link flex-container">update</div>
                                    {showMenu == taskComment[id].id && (
                                        <div className="commentSelect profileConten">
                                            <div className="outline nav-link flex-container" onClick={onEdit(taskComment[id])}>Edit</div>
                                            <div className="outline nav-link flex-container" onClick={onDeleteSelect(taskComment[id].id)}>Delete</div>
                                        </div>
                                    )}
                                </div>)
                            }
                        </div>
                    ))}
                </div>
            </div>
         </div>
         <div className="modalCommentForm">
             <CommentForm comment2={currComment?.comment} commentId={currComment?.id} onSetCurr={() => setCurrComment(null)}/>
         </div>
     </div>
 )
}
export default TaskDetails
