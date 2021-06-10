const SET_PROJECTS = "projects/SET_PROJECT";
const ADD_PROJECT = "/projects/ADD_PROJECT";
const REMOVE_PROJECT = "projects/REMOVE_PROJECT";

const setProjects = (projects) => ({
    type: SET_PROJECTS,
    projects
});

const addProject = (project) => ({
    type: ADD_PROJECT,
    project
});

const removeProject = (payload) => ({
    type: REMOVE_PROJECT,
    payload
});


export const getProject = (projectId) => async dispatch => {
    const response = await fetch(`/api/projects/${projectId}`, {
        headers: {'Content-Type': 'application/json'}
    });
    const data = await response.json()
    if(!response.ok){
        return;
    };
    dispatch(addProject(data))
};

export const projects = () => async dispatch => {
    const response = await fetch(`/api/projects/`, {
        headers: {'Content-Type': 'application/json'}
    });
    const data = await response.json()
    if(!response.ok){
        return
    };
    dispatch(setProjects(data));
};

export const deleteProject = (projectId) => async dispatch => {
    const response = await fetch(`/api/projects/${projectId}`, {
        headers: {'Content-Type': 'application/json'},
        method: "DELETE"
    });
    const data = await response.json()
    if(!response.ok){
        return
    };
    dispatch(removeProject(data))
};

export const postProject = (project) => async dispatch => {
    const {title} = project
    const response = await fetch(`/api/projects/`, {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({title})
    });
    const data = await response.json();
    if(!response.ok){
        return;
    };
    return dispatch(addProject(data));
};

export const updateProjectStatus = (project) => async dispatch => {
    let status = project.complete
    let newStatus = !status
    const response = await fetch(`/api/projects/${project.id}`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT',
        body: JSON.stringify({ 'complete': newStatus })
    });
    const data = await response.json();
    if (!response.ok) {
        return;
    };
    return dispatch(addProject(data));
};

const initialState = { project: null , projects: []}

const projectReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_PROJECTS:
            return { ...state, projects: action.projects.projects};
        case REMOVE_PROJECT:
            const newState = {...state};
            const id = action.payload.id
            newState.projects = newState.projects.filter(project => project.id !== id)
            return { project: null , projects: newState.projects};
        case ADD_PROJECT:
            const allProjects = [...state.projects]
            allProjects.push(action.project)
            return {project: action.project, projects: [...allProjects]};
        default:
            return state;
    };
};

export default projectReducer;
