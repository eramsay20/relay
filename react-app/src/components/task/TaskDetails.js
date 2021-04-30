import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { comments, deleteComment } from '../../store/comment';
import { deleteTaskFunction } from '../../store/task';
import CommentForm from "../CommentForm"

const TaskDetails = ({task, date, onClick}) => {
    const profile_icon_violet = require('../../frontend-assets/profile_icon_violet.png');

    const history = useHistory()
    const {project_id, task_id} = useParams

    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const taskComment = useSelector(state => state.comment.comments);
    const userCom = (taskComment && user.username in taskComment)


    const [showMenu, setShowMenu] = useState(false);
    const [currComment, setCurrComment] = useState(null);
    const [hideForm, setHideForm] = useState(true);
    const [userComment, setUserComment] = useState(!userCom)

    console.log(userComment)
    console.log(currComment)
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
         <nav>
             <div onClick={onClick(null)}>Exit</div>
             <div onClick={onDeleteTask}>Delete</div>
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
                                (<div onClick={openMenu}>
                                    <div onClick={openMenu} className="dropDownDiv">V</div>
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
