import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
import ProjectForm from "../ProjectForm";

const ProjectHeader = ({project}) => {
    const [showModal, setShowModal] = useState(false);
    const task_list_icon = require("../../frontend-assets/task_list_icon.png")
    const incomplete_check = require('../../frontend-assets/grey_checkmark.png')
    const complete_check = require('../../frontend-assets/aqua_checkmark.png')
    const completed = project?.complete === true ? 'Completed' : 'In Progress'

    const onClick = e => {
        e.preventDefault();
        setShowModal(true);
    };

    return (
        <>
            <div></div>
            <div className='flex-container' style={{ 'width': '100%', 'height':'100%', 'transform':'scale(.8)', 'paddingTop':'10px' }}>
                <img onClick={onClick} title="Create Project" src={task_list_icon} alt="task_icon"></img>
                { showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ProjectForm />
                </Modal>
                )}
            </div>
            <div style={{ 'text-transform': 'capitalize', 'paddingTop':'10px' }}>
                <h3 style={{ 'paddingTop': '15px' }}>{project?.title}</h3>
                <div className="flex-container" style={{ 'justifyContent':'flex-start'}}>
                    <h4 style={{ 'color': 'var(--GREY_TEXT_LABELS', 'margin': '0px'}}>{completed}</h4>
                    <img style={{ 'width': '20px', 'paddingLeft': '10px' }} src={incomplete_check}></img>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </>
    );
};

export default ProjectHeader;
