import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { act } from 'react-dom/test-utils';
import { render , fireEvent, wait, getByText, getByTestId, getByPlaceholderText } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
//import labEddit from '../../Services/labEdiit';
import App from './App';
import LandingPage from './Pages/Landing/landingPage';
import LoginPage from './Pages/Login/loginPage';
import Axios from 'axios';
import labEdiit from './Services/labEdiit';
import Feed from './Pages/Feed/feedPage';
import PostDetail from './Pages/PostDetails/postDetailsPage';


labEdiit.get = jest.fn().mockResolvedValue({data: {}})
Axios.post = jest.fn().mockResolvedValue();

test('LandingPage route LoginPage', () => {
    const history = createMemoryHistory();
    const { getByTestId, getByText } = render(
        <Router history={history}>
            <App />
        </Router>);
    
    const login = getByTestId(/btn-login/i);
    expect(login).toBeInTheDocument();
    fireEvent.click(login);
    const enter = getByText(/Entrar/i);
    expect(enter).toBeInTheDocument();
});

test('LandingPage route SignUpPage', async () => {
    const history = createMemoryHistory();
    const { container, getByPlaceholderText, getByText, getByTestId } = render(
        <Router history={history}>
            <App />
        </Router>);
    
    const signUp = getByText(/cadastrar/i);
    expect(signUp).toBeInTheDocument();
    fireEvent.click(signUp);
    const userName = getByPlaceholderText(/Nome de Usuário/i);
    userEvent.type(userName, "admin");
    expect(userName).toBeInTheDocument('admin');
    //expect(userName).toHaveValue('admin');

    const email = getByPlaceholderText(/Email/i);
    expect(email).toBeInTheDocument();
    userEvent.type(email, "admin@admin.com.br");

    const password = getByPlaceholderText(/senha/i);
    expect(password).toBeInTheDocument();
    userEvent.type(password, "admin");

    const btnSignUp = getByTestId(/btn-signup/i);
    fireEvent.submit(btnSignUp);
    
    expect(Axios.post).toHaveBeenCalledTimes(1);

    const inputEmail = getByPlaceholderText(/Email/i);
    userEvent.type(inputEmail, 'admin@admin.com.br');
    const inputPassword = getByPlaceholderText(/Senha/i);
    userEvent.type(inputPassword, 'admin');
    const btnEnter = getByText(/Entrar/i);
    fireEvent.click(btnEnter);

    wait(() => {
        const feed = getByText(/Feed/i);
        expect(feed).toBeInTheDocument('Feed');
    });
});

test('Feed search title ande like post', async () => {

    labEdiit.get = jest.fn().mockResolvedValue({
        data: {
            posts: [
            {
            "comments": [
                {
                    "userVoteDirection": 0,
                    "id": "EiKumukbqDWWlWqfcogX",
                    "votesCount": -1,
                    "createdAt": 1591990686529,
                    "username": "usuario_padrao",
                    "text": "comentario padrao"
                },
                {
                    "userVoteDirection": 0,
                    "id": "xPGlXP51YIdH3N4AkWaE",
                    "createdAt": 1594152919820,
                    "votesCount": 0,
                    "username": "admin",
                    "text": "Comentando"
                }
            ],
            "userVoteDirection": 0,
            "id": "0NK4I1fhiAMoCZ8ooFFb",
            "votesCount": 8,
            "createdAt": 1591990585598,
            "text": "post padrao",
            "commentsCount": 2,
            "title": "titulo padrao",
            "username": "usuario_padrao"
            }
            ]}
        });

    const history = createMemoryHistory();
    const { container, getByPlaceholderText, getByText, getByTestId } = render(
        <Router history={history}>
            <Feed />
        </Router>);

    await wait(() => {
        const inputSearch = getByPlaceholderText(/Busque um post/i);
        expect(inputSearch).toBeInTheDocument('Busque um post');
        userEvent.type(inputSearch, 'titulo');
        expect(labEdiit.get).toHaveBeenCalled();
        const usernamePost = getByText(/usuario_padrao/i);
        expect(usernamePost).toBeInTheDocument(/usuario_padrao/i);
        const votePostFeed = getByTestId(/votePostFeed/i);
        expect(votePostFeed).toBeInTheDocument();
        userEvent.click(votePostFeed);
        const votesPost = getByTestId(/votes-count/i);
        expect(votesPost).toBeInTheDocument('9 votos');
    });

}, 10000);

test('Feed search text and dislike post', async () => {

    labEdiit.get = jest.fn().mockResolvedValue({
        data: {
            posts: [
            {
            "comments": [
                {
                    "userVoteDirection": 0,
                    "id": "EiKumukbqDWWlWqfcogX",
                    "votesCount": -1,
                    "createdAt": 1591990686529,
                    "username": "usuario_padrao",
                    "text": "comentario padrao"
                },
                {
                    "userVoteDirection": 0,
                    "id": "xPGlXP51YIdH3N4AkWaE",
                    "createdAt": 1594152919820,
                    "votesCount": 0,
                    "username": "admin",
                    "text": "Comentando"
                }
            ],
            "userVoteDirection": 0,
            "id": "0NK4I1fhiAMoCZ8ooFFb",
            "votesCount": 8,
            "createdAt": 1591990585598,
            "text": "post padrao",
            "commentsCount": 2,
            "title": "titulo padrao",
            "username": "usuario_padrao"
            }
            ]}
        });

    const history = createMemoryHistory();
    const { container, getByPlaceholderText, getByText, getByTestId } = render(
        <Router history={history}>
            <Feed />
        </Router>);

    await wait(() => {
        const inputSearch = getByPlaceholderText(/Busque um post/i);
        expect(inputSearch).toBeInTheDocument('Busque um post');
        userEvent.type(inputSearch, 'post padrao');
        expect(labEdiit.get).toHaveBeenCalled();
        const usernamePost = getByText(/usuario_padrao/i);
        expect(usernamePost).toBeInTheDocument(/usuario_padrao/i);
        const votePostFeed = getByTestId(/dislikePostFeed/i);
        expect(votePostFeed).toBeInTheDocument();
        userEvent.click(votePostFeed);
        const votesPost = getByTestId(/votes-count/i);
        expect(votesPost).toBeInTheDocument('7 votos');
    });

}, 10000);

test('Feed search text', async () => {

    labEdiit.get = jest.fn().mockResolvedValue({
        data: {
            posts: [
            {
            "comments": [
                {
                    "userVoteDirection": 0,
                    "id": "EiKumukbqDWWlWqfcogX",
                    "votesCount": -1,
                    "createdAt": 1591990686529,
                    "username": "usuario_padrao",
                    "text": "comentario padrao"
                },
                {
                    "userVoteDirection": 0,
                    "id": "xPGlXP51YIdH3N4AkWaE",
                    "createdAt": 1594152919820,
                    "votesCount": 0,
                    "username": "admin",
                    "text": "Comentando"
                }
            ],
            "userVoteDirection": 0,
            "id": "0NK4I1fhiAMoCZ8ooFFb",
            "votesCount": 8,
            "createdAt": 1591990585598,
            "text": "post padrao",
            "commentsCount": 2,
            "title": "titulo padrao",
            "username": "usuario_padrao"
            }
            ]}
        });

    const history = createMemoryHistory();
    const { container, getByPlaceholderText, getByText, getByTestId } = render(
        <Router history={history}>
            <Feed />
        </Router>);

    await wait(() => {
        const inputSearch = getByPlaceholderText(/Busque um post/i);
        expect(inputSearch).toBeInTheDocument('Busque um post');
        userEvent.type(inputSearch, 'usuario_padrao');
        expect(labEdiit.get).toHaveBeenCalled();
        const usernamePost = getByText(/usuario_padrao/i);
        expect(usernamePost).toBeInTheDocument(/usuario_padrao/i);
        const votePostFeed = getByTestId(/votePostFeed/i);
        expect(votePostFeed).toBeInTheDocument();
        userEvent.click(votePostFeed);
        const votesPost = getByTestId(/votes-count/i);
        expect(votesPost).toBeInTheDocument('9 votos');
    });

}, 10000);

test('PostDetail', async () => {

    labEdiit.get = jest.fn().mockResolvedValue({
        data: {
          "post": {
            "comments": [
                {
                    "userVoteDirection": 0,
                    "id": "SPcg2X1uLOliyPPWx9OM",
                    "createdAt": 1594393338256,
                    "votesCount": 0,
                    "username": "maanoeln",
                    "text": "eeeee, essa é minha opniao"
                }
            ],
            "userVoteDirection": 0,
            "id": "2jhSrLYkRUsf6uIFyPzg",
            "text": "eeee",
            "commentsCount": 1,
            "title": "eeee",
            "username": "mello",
            "votesCount": 1,
            "createdAt": 1594239257441
        }}
    });
    const history = createMemoryHistory();

    const { container, getByPlaceholderText, getByText, getByTestId } = render(
        <Router history={history}> 
            <PostDetail />
        </Router>);

    await wait(() => {
        const usernamePost = getByText(/@mello/);
        expect(usernamePost).toBeInTheDocument('@mello');
        const inputComment = getByPlaceholderText('Comentar');
        userEvent.type(inputComment, 'Bom comentário');
        const btnComment = getByTestId(/btn-comment/i);
        userEvent.click(btnComment);
        
        console.log(container.innerHTML);
    });
    
    //const logout = getByText(/Logout/i);
    //console.log(logout);

}, 10000)