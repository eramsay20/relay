import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProjectHeader = () => {
    // const dispatch = useDispatch(); 
    const user = useSelector(state => state.session.user);

    return (
        <>
            <h1>PROJECT HEADER HERE</h1>
        </>
    );
};

export default ProjectHeader;