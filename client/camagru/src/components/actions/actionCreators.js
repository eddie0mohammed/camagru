
import * as actionTypes from './actionTypes';

export const authIn = () => {
    return {
        type: actionTypes.AUTH_IN
    }
}

export const authOut = () => {
    return {
        type: actionTypes.AUTH_OUT
    }
}