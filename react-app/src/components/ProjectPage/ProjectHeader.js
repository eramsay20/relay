import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
import ProjectForm from "../ProjectForm";

const ProjectHeader = ({project}) => {
    // const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const user = useSelector(state => state.session.user);

    const onClick = e => {
        e.preventDefault();
        setShowModal(true);
    };

    const completed = project?.complete === true ? 'Completed' : 'In Progress'
    const task_list_icon = require("../../frontend-assets/task_list_icon.png")

    return (
        <>
            <div></div>
            <div className='flex-container' style={{ 'width': '100%', 'height':'100%', 'transform':'scale(.8)' }}>
                <img onClick={onClick} title="Create Project" src={task_list_icon} alt="task_icon"></img>
                { showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ProjectForm />
                </Modal>
                )}
            </div>
            <div style={{ 'text-transform': 'capitalize', 'paddingTop':'10px' }}>
                <h3>{project?.title}</h3>
                <h4 style={{'color':'var(--GREY_TEXT_LABELS'}}>{completed}</h4>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </>
    );
};

export default ProjectHeader;
