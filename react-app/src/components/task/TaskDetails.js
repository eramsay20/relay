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
    const userCom = (taskComment && user.username in taskComment)


    const [showMenu, setShowMenu] = useState(false);
    const [currComment, setCurrComment] = useState(null);
    const [hideForm, setHideForm] = useState(true);
    const [userComment, setUserComment] = useState(!userCom)

    const openMenu = e => {
        e.preventDefault();
        if(showMenu){
            setShowMenu(false);
            return;
        }else {
            setShowMenu(true);
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
        setUserComment(true);
        setHideForm(true);
        setCurrComment(null);
        dispatch(comments(task.id))
    };
    const onEdit = (comment) => () => {
        setCurrComment(comment);
        setHideForm(true);
        dispatch(comments(task.id))
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
                    {taskComment && Object.keys(taskComment).map(name => (
                        <div key={name} style={{"padding": "10px"}}>
                            <img style={{ 'width': '30px', 'paddingLeft': '10px' }} src={profile_icon_violet}></img>
                            <span className="commentInitial">{name.split('')[0].toUpperCase()}</span>
                            <span className="commentText">{taskComment[name]?.comment}</span>
                            {taskComment[name]?.user_id === user.id &&
                                (<div onClick={openMenu}>
                                    <div onClick={openMenu} className="dropDownDiv nav-link flex-container">update</div>
                                    {showMenu && (
                                        <div className="commentSelect profileContent">
                                            <div className="logout outline" onClick={onEdit(taskComment[name])}>Edit</div>
                                            <div className="outline" onClick={onDeleteSelect(taskComment[name].id)}>Delete</div>
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
             {(hideForm && (currComment || userComment))  && <CommentForm comment2={currComment?.comment} commentId={currComment?.id}  onHide={() => setHideForm(false)}  />}
         </div>
     </div>
 )
}
export default TaskDetails
