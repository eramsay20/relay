const SET_PROJECTS = "projects/SET_PROJECT";
const GET_PROJECT = "/projects/GET_PROJECT";
const REMOVE_PROJECT = "projects/REMOVE_PROJECT";

const setProjects = (projects) => ({
    type: SET_PROJECTS,
    projects
});

const getProject = (project) => ({
    type: GET_PROJECT,
    project
});

const removeProject = () => ({
    type: REMOVE_PROJECT
});

export const project = (projectId) => async dispatch => {
    const response = await fetch(`/api/projects/${projectId}`, {
        headers: {'Content-Type ': 'application/json'}
    });
    const data = await response.json()
    if(!response.ok){
        return;
    };
    dispatch(getProject(data))
};

export const projects = () => async dispatch => {
    const response = await fetch(`/api/projects`, {
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
        return;
    };
    dispatch(removeProject());
};

const initialState = { project: null , projects: null}

const projectReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_PROJECTS:
            return { ...state, projects: action.projects};
        case REMOVE_PROJECT:
            return { project: null , projects: state.projects};
        case GET_PROJECT:
            return { ...state, project: action.project};
        default:
            return state;
    };
};

export default projectReducer;
