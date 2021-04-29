const LOAD = "session/LOAD"

const getUsers = payload =>({
    type: LOAD,
    payload
})

export const getUsersFunction = () => async dispatch => {
    const response = await fetch('/api/users/',{
        headers: {'Content-Type': 'application/json'}
    });
    if (response.ok) {
        const users = await response.json()
        dispatch(getUsers(users));
    }
}
const initialState = { users: [] };

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD:
            return { users: action.payload.users };
        default:
            return state;
    }
}
