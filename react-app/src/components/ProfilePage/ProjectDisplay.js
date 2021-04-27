import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProjectDisplay = () => {
    // const dispatch = useDispatch(); 
    const user = useSelector(state => state.session.user);

    return (
        <>
            <h1>PROJECTS HERE</h1>
        </>
    );
};

export default ProjectDisplay;