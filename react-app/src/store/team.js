const LOAD = 'teams/LOAD'
const ONE = 'teams/ONE'
const DELETE = 'teams/DELETE'
const CRU = 'teams/CRU'
const JOIN = 'teams/CRU'

const getTeams = (list) => ({
    type: LOAD,
    list
})


const getOneTeam = (payload) => ({
    type: ONE,
    payload
})

const joinToTeam = (payload) => ({
    type: JOIN,
    payload
})

const makeTeam = (payload) =>({
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
        console.log(teams)
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
    console.log(teamId)
    const response = await fetch(`/api/teams/${teamId}`, {
        headers: {'Content-Type': 'application/json'},
        method: 'DELETE',

    });
    console.log(response)
    if (response.ok) {
        const deletedTeamIdObj = await response.json()
        dispatch(deleteTeam(deletedTeamIdObj))
    }
}
export const makeTeamFunction = (title, users) => async dispatch => {
    console.log(title)
    const response = await fetch('/api/teams/', {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({'title': title, 'users' : users})
    });
    console.log(response)
    if (response.ok) {
        const team = await response.json()
        dispatch(makeTeam(team))
    }
}

export const updateTeamFunction = (teamId, title, users) => async dispatch => {
    const response = await fetch(`/api/teams/${teamId}`, {
        headers: {'Content-Type': 'application/json'},
        method: 'PUT',
        body: JSON.stringify({'title': title, 'users' : users})
    });
    if (response.ok) {
        const team = await response.json()
        dispatch(makeTeam(team))
    }
}

const initialState = {team: null, teams: []}

const teamReducer = (state=initialState, action) => {
    switch(action.type) {
        case LOAD: {
            const allTeams = {}
            const list = action.list
            console.log(list)
            const keys = Object.keys(list)
            const listLength = keys.length
            const array = []
            for (let i = 0; i < listLength; i++) {
                allTeams[keys[i]] = action.list[keys[i]]
                array.push(allTeams[keys[i]]) 
            }
            return { ...state, ...allTeams, teams: array}
        }
        case ONE: {
            
            return {
                ...state,
                team: action.payload
                
            }
        }
        case DELETE: {
            const newState = {...state};
            const id = action.payload.id
            delete newState[id]
            delete newState.team[id]
            newState.teams = newState.teams.filter(team => team.id !== id)
            return {
                ...newState
            }
        }
        case CRU: {
            const newState = {...state}
            newState.team ={ [action.payload.id] : action.payload }
            if (newState[action.payload.id]){
                newState[action.payload.id] = action.payload
                newState.teams.forEach((element, index) => {
                    console.log(element)
                    if (element.id === action.payload.id){
                        newState.teams.splice(index, 1)
                        newState.teams.push(action.payload)
                    }
                });
            } else {
                newState[action.payload.id] = action.payload;
                newState.teams.push(action.payload)
            }
            return {
                ...newState,
                [action.payload.id] : action.payload,
                

            }
        }
        case JOIN: {
            return { ...state }
        }
        default:
            return state;
    }
}

export default teamReducer