import { SET_CURRENT_USER } from '../actionTypes'

const initState = {
    isAuthenticated: false,
    currentUser: {}
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state, 
                currentUser: action.user, 
                isAuthenticated: !!Object.keys(action.user).length
            }
    
        default:
            return state
    }
}

export default authReducer