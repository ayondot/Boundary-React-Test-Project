import userServiceClient from "./../../api/user-service-client";
import {browserHistory} from "./../../core/browserhistory";

export const USER_UPDATE_REQUEST = '@@auth/USER_UPDATE_REQUEST';
export const USER_UPDATE_SUCCESS = '@@auth/USER_UPDATE_SUCCESS';
export const USER_UPDATE_FAILURE = '@@auth/USER_UPDATE_FAILURE';

export function actionUserUpdateSuccess(payload) {
    return {
        type: USER_UPDATE_SUCCESS,
        payload
    }
};

export function actionUserUpdateFailure(error) {
    return {
        type: USER_UPDATE_FAILURE,
        error
    }
};

export function eventUserUpdateAsync(payload) {

    return async (dispatch) => {
        
        const { firstName, lastName, username } = payload;
        
        // sanitize user input
        payload = { firstName, lastName, username };

        dispatch({ type: USER_UPDATE_REQUEST});

        try {
            let response = await userServiceClient.editUser(payload);
            
            dispatch(actionUserUpdateSuccess(response));
            
            // '/' is the browser history page, pushing this key will allow us to move on
            return browserHistory.push('/');
        } catch (e) {
            dispatch(actionUserUpdateFailure(e));
        }
    }
}
