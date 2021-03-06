import { USER_LOGIN_REQUEST, USER_LOGGED_OUT, USER_LOGIN_SUCCESS,
    USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE } from "./actions";

const initialState = {
    loggedIn : false,
    loggingIn: false,
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

export {reducer as authReducer};