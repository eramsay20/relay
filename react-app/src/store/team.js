const LOAD = 'teams/LOAD'
const ONE = 'teams/ONE'
const DELETE = 'teams/DELETE'
const CRU = 'teams/CRU'

const getTeams = (list) => ({
    type: LOAD,
    list
})

const getOneTeam = (payload) => ({
    type: ONE,
    payload
})

const makeTeam = (payload) => ({
    type: CRU,
    payload
})

const deleteTeam = (payload) => ({
    type: DELETE,
    payload
})

export const getTeamsFunction = () => async dispatch => {
    const response = await fetch('/api/teams',{
        headers: {'Content-Type': 'application/json'}
    });
    if (response.ok) {
    const teams = await response.json()
    dispatch(getTeams(teams));
    }
}
export const getOneTeamFunction = (teamId) => async dispatch => {
    const response = await fetch(`/api/teams/${teamId}`, {
        headers: {'Content-Type': 'application/json'}
    });
    if (response.ok) {
        const team = await response.json()
        dispatch(getOneTeam(team))
    }
}

export const deleteTeamFunction = (teamId) => async dispatch => {
    const response = await fetch(`/api/teams/${teamId}`, {
        headers: {'Content-Type': 'application/json'},
        method: 'DELETE',

    });
    if (response.ok) {
        const deletedTeamIdObj = await response.json()
        dispatch(deleteTeam(deletedTeamIdObj))
    }
}
export const makeTeamFunction = (form) => async dispatch => {
    const response = await fetch('/api/teams', {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({'title': form.title})
    });
    if (response.ok) {
        const team = await response.json()
        dispatch(makeTeam(team))
    }
}

export const updateTeamFunction = (teamId, form) => async dispatch => {
    const response = await fetch(`/api/teams/${teamId}`, {
        headers: {'Content-Type': 'application/json'},
        method: 'PUT',
        body: JSON.stringify({'title': form.title})
    });
    if (response.ok) {
        const team = await response.json()
        dispatch(makeTeam(team))
    }
}

const initialState = {team: null, teams: null}

const teamReducer = (state=initialState, action) => {
    switch(action.type) {
        case LOAD: {
            const allTeams = {}
            action.list.forEach(team => {
                allTeams[team.id] = team;
            });
            return {
                ...allTeams,
                ...state
            }
        }
        case ONE: {
            
            return {
                ...state,
                team:{
                    [action.payload.id]: action.payload
                }
            }
        }
        case DELETE: {
            const newState = {...state};
            const id = action.payload.id
            delete newState[id]
            delete newState.team[id]
            return {
                ...newState
            }
        }
        case CRU: {
            return {
                ...state,
                [action.payload.id] : action.payload
            }
        }
        default:
            return state;
    }
}

export default teamReducer