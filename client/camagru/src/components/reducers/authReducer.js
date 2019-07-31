

import * as actionTypes from '../actions/actionTypes';


const initialState = {
    authenticated: false,
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        
        case actionTypes.AUTH_IN:
            return {
                ...state,
                authenticated: true
            }

        case actionTypes.AUTH_OUT:
            return {
                ...state,
                authenticated: false
            }
            



        default:
            return state;
    }
}

export default authReducer;