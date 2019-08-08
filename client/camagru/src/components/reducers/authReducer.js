

import * as actionTypes from '../actions/actionTypes';


const initialState = {
    authenticated: "",
    errorMessage: ''
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
    

        case actionTypes.AUTH_ERROR:
            return{
                ...state,
                errorMessage: action.payload
            }

        case actionTypes.SIGN_UP:
            return {
                ...state,
                authenticated: action.payload
            }

        case actionTypes.SIGN_IN:
            return {
                ...state,
                authenticated: action.payload
            }

        case actionTypes.LOGOUT:
            return {
                ...state,
                authenticated: action.payload
            }
            



        default:
            return state;
    }
}

export default authReducer;