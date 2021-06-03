import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { comments, deleteComment } from '../../store/comment';
import { deleteTaskFunction } from '../../store/task';
import CommentForm from "../CommentForm"

const TaskDetails = ({assignee, task, date, onClick}) => {
    const profile_icon_violet = require('../../frontend-assets/profile_icon_violet.png');

    const history = useHistory()
    const {project_id} = useParams

    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const taskComment = useSelector(state => state.comment.comments);


    const [showMenu, setShowMenu] = useState(null);
    const [currComment, setCurrComment] = useState(null);

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
    const onDeleteTask = () => {
        dispatch(deleteTaskFunction(task.id))
        onClick(null)
        history.push(`/projects/${project_id}`)
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

 return (
     <div className="taskDetailContainer">
         <div style={{ 'justifyContent': 'flex-start', 'borderBottom':'2px solid var(--GREY_HIGHLIGHT)' }} className='flex-container min-margin'>
             <div className='nav-link' onClick={onClick(null)}>Exit</div>
             <div className='nav-link' onClick={onDeleteTask}>Delete</div>
         </div>
         <div >
             <h1 className="min-margin capitalize" >{task.title}</h1>
            <div className="taskDetailContent">
                 <div className='flex-container' style={{ 'justifyContent': 'flex-start' }}>
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
                </div>
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
