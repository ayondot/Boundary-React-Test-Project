import React from 'react';
import { Route, Redirect} from "react-router";

let isProtectedCheck = false;

export const ProtectedRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        isProtectedCheck
            ? <Component {...props}/>
            : <Redirect to={{ pathname: '/login', state: {from: props.location} }}/>
    )} />
);