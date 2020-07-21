import React from 'react';
import { useHistory } from 'react-router-dom';
import { 
    DivHeader, DivVazia, DivLogo, DivLogin, ImgLogo
} from './style';
import logo from '../../Global/image.png'

const HeaderLogin = () => {
    const history = useHistory();

    return (
        <DivHeader>
            <DivVazia />
            <DivLogo onClick={() => history.push('/')}>
                <ImgLogo src={logo} />
            </DivLogo>
            <DivLogin onClick={() => history.push('/login')}>
                Login
            </DivLogin>
        </DivHeader>)        
}

export default HeaderLogin;