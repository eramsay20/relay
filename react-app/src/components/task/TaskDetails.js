import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { comments, deleteComment, editComment } from '../../store/comment';
import CommentForm from "../CommentForm"

const TaskDetails = ({task, date, onClick}) => {
    const profile_icon_violet = require('../../frontend-assets/profile_icon_violet.png');

    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const taskComment = useSelector(state => state.comment.comments);
    const userComment = !(taskComment && user.username in taskComment)

    const [showMenu, setShowMenu] = useState(true);
    const [currComment, setCurrComment] = useState(null);
    const [hideForm, setHideForm] = useState(true)
    const openMenu = e => {
        e.preventDefault();
        if(showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if(!showMenu) return;
        const closeMenu = e => {
        e.preventDefault();
        setShowMenu(false);
        };
        document.addEventListener("click", closeMenu);
        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);


    const onDelete = (id) => () => {
        dispatch(deleteComment(id));
    };
    const onEdit = (comment) => () => {
        setCurrComment(comment)
    };

    useEffect(() => {
        dispatch(comments(task.id))
    }, [dispatch]);
    const due = date(task.due_date)
 return (
     <div className="taskDetailContainer">
         <nav>
             <div onClick={onClick(null)}>Exit</div>
         </nav>
         <div>
            <h1>{task.title}</h1>
            <div className="taskDetailContent">
                <div>
                    <h4>Assignee</h4>
                    <p>{task.user_id}</p>
                </div>
                <div>
                    <h4>Due Date</h4>
                    <p>{due}</p>
                </div>
                <div>
                    <h4>Project</h4>
                    <p>{task.project_id}</p>
                </div>
                <div>
                    <h4>Description</h4>
                    <p>{task.description}</p>
                </div>
                <div>
                    <h4>Comments</h4>
                    {taskComment && Object.keys(taskComment).map(name => (
                        <div key={name} style={{"padding": "10px"}}>
                            <img style={{ 'width': '30px', 'paddingLeft': '10px' }} src={profile_icon_violet}></img>
                            <span className="commentInitial">{name.split('')[0].toUpperCase()}</span>
                            <span className="commentText">{taskComment[name]?.comment}</span>
                            {taskComment[name]?.user_id === user.id &&
                                (<div>
                                    <div onClick={openMenu} >adkja;lfdj;asjr;lejl;</div>
                                    {showMenu && (
                                        <div className="profileContent">
                                            <div className="logout" onClick={onEdit(taskComment[name])}>Edit</div>
                                            <div onClick={onDelete(taskComment[name].id)}>Delete</div>
                                        </div>
                                    )}
                                </div>)
                            }
                        </div>
                    ))}
                </div>
            </div>
         </div>
         <div>
             {(hideForm && (currComment || userComment))  && <CommentForm comment2={currComment?.comment} commentId={currComment?.id}  onHide={() => setHideForm(false)} />}
         </div>
     </div>
 )
}
export default TaskDetails
