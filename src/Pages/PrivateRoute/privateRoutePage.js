import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const runClientAuthCheck = () => {
    const token = localStorage.getItem('token');

    return token != null &&
        token.match(/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.?[A-Za-z0-9-_.-_]*$/)
        ? true
        : false;
};
export function PrivateRoute({ ...props }) {
    return runClientAuthCheck() ? (
        <Route {...props} />
    ) : (
        <Redirect to="/login" />
    );
}

export function LoginRoute({ ...props }) {
    return runClientAuthCheck() ? (
        <Redirect to="/feed" />
    ) : (
        <Route {...props} />
    );
}
