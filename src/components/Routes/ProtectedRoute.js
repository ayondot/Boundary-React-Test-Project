import React from 'react';
import { Route, Redirect} from "react-router";

export const ProtectedRoute = ({ component: Component, authStore: auth, ...rest}) => (
    <Route {...rest} render={props => (
        localStorage.getItem('isAuth')
            ? <Component {...props}/>
            : <Redirect to={{ pathname: '/login', state: {from: props.location} }}/>
    )} />
);