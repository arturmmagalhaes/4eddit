import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { ContainerLogin, FormDiv } from './logindialog_styles';
import labEdiit from '../../Services/labEdiit';
import ImageVector from "../../Global/image_vector/img-test-4.png"

export default function LoginDialog() {
    const [loginBody, setLoginBody] = useState({});
    const history = useHistory();

    const handleForm = (e) => {
        const { id, value } = e.target;
        setLoginBody({ ...loginBody, [id]: value });
    };

    const login = async () => {
        try {
            const response = await labEdiit.post(`/login`, loginBody);
            window.localStorage.setItem('token', response.data.token);
            window.localStorage.setItem('user', response.data.user.username);
            alert('😃,Você Está Logado');
            history.push('/feed');
        } catch (error) {
            console.log(error);
            alert('😱, Algo Deu Errado');
        }
    };

    return (
        <ContainerLogin>
            <img className="ImageBackground" src={ImageVector} />
            <FormDiv>
                <h1>Login</h1>
                <input id="email" placeholder="Email" onChange={handleForm} />
                <input
                    id="password"
                    placeholder="Senha"
                    onChange={handleForm}
                    type="password"
                />
                <button onClick={login}>Entrar</button>
                <Link to="/signup">
                    <button>Cadastrar</button>
                </Link>
            </FormDiv>
        </ContainerLogin>
    );
}
