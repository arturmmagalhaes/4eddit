import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing/landingPage';
import Login from './Login/loginPage';
import SignUp from './SignUp/signUpPage';
import PostDetails from './PostDetails/postDetailsPage';
import Feed from './Feed/feedPage';
import { PrivateRoute, LoginRoute } from './PrivateRoute/privateRoutePage';
import HeaderLogin from '../Components/Header/HeaderLogin';
import HeaderLogout from '../Components/Header/HeaderLogout';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <HeaderLogin />
                <Landing />
            </Route>
            <LoginRoute exact path="/login" component={Login}>
                <HeaderLogin />
                <Login />
            </LoginRoute>
            <LoginRoute exact path="/signup" component={SignUp}>
                <HeaderLogin />
                <SignUp />
            </LoginRoute>
            <PrivateRoute exact path="/feed" component={Feed}>
                <HeaderLogout />
                <Feed />
            </PrivateRoute>
            <PrivateRoute exact path="/posts/:id" component={PostDetails}>
                <HeaderLogout />
                <PostDetails />
            </PrivateRoute>
        </Switch>
    );
}
