import authServiceClient from "./../../api/auth-service-client";
import {browserHistory} from "./../../core/browserhistory";

export const USER_LOGGED_OUT = '@@auth/LOG_OUT';
export const USER_LOGIN_REQUEST = '@@auth/LOG_IN_REQ';
export const USER_LOGIN_SUCCESS = '@@auth/LOG_IN_SUCCESS';
export const USER_LOGIN_FAILURE = '@@auth/LOG_IN_FAILURE';

export const USER_REGISTER_REQUEST = '@@auth/USER_REGISTER_REQUEST';
export const USER_REGISTER_SUCCESS = '@@auth/USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAILURE = '@@auth/USER_REGISTER_FAILURE';

export function actionLoginSuccess(payload) {
    return {
        type: USER_LOGIN_SUCCESS,
        payload
    }
};

export function actionLoginFailure(error) {
    return {
        type: USER_LOGIN_FAILURE,
        error
    }
};

export function eventLoginAsync(username, password) {

    return async (dispatch) => {

        let payload = {username: username, password: password};

        dispatch({ type: USER_LOGIN_REQUEST});

        try {
            let response = await authServiceClient.login(payload);
            
            dispatch(actionLoginSuccess(response));
            
            // '/' is the browser history page, pushing this key will allow us to move on
            return browserHistory.push('/');
        } catch (e) {
            dispatch(actionLoginFailure(e));
        }
    }
}


export function actionRegisterSuccess(payload) {
    return {
        type: USER_REGISTER_SUCCESS,
        payload
    }
};

export function actionRegisterFailure(error) {
    return {
        type: USER_REGISTER_FAILURE,
        error
    }
};

export function eventRegisterAsync(payload) {

    return async (dispatch) => {
        
        const { firstName, lastName, username, password } = payload;

        // sanitize user input
        payload = { firstName, lastName, username, password };

        dispatch({ type: USER_REGISTER_REQUEST});

        try {
            let response = await authServiceClient.register(payload);

            dispatch(actionRegisterSuccess(response));

            // '/' is the browser history page, pushing this key will allow us to move on
            return browserHistory.push('/');            
        } catch (e) {
            dispatch(actionRegisterFailure(e));
        }
    }
}

