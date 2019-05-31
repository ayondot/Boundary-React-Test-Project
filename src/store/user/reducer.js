import { USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAILURE } from "./actions";

const initialState = {
    updatingUser: false,
    user: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
        {
            return Object.assign({}, state, {
                loggingIn: true
            });
        }
        case USER_LOGIN_SUCCESS: {
            localStorage.setItem('isAuth', 'Y');
            return Object.assign({}, state, {
                loggedIn: true,
                loggingIn: false,
                user: action.payload
            });
        }
        case USER_LOGGED_OUT:
        {
            return Object.assign({}, state, {
                loggedIn: false
            });
        }

        case USER_REGISTER_REQUEST:
            {
                return Object.assign({}, state, {
                    registering: true
                });
            }
        case USER_REGISTER_SUCCESS: {
            localStorage.setItem('isAuth', 'Y');
            return Object.assign({}, state, {
                registering: false,
                user: action.payload
            });
        }
        case USER_REGISTER_FAILURE:
        {
            return Object.assign({}, state, {
                registering: false
            });
        }

        default: {
            return state;
        }
    }
};

export {reducer as userReducer};