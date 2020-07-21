import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { 
    DivHeader, DivLogo, DivUser, DivLogout, ImgLogo
} from './style';
import logo from '../../Global/image.png'

const HeaderLogout = () => {
    const history = useHistory();
    const user = localStorage.getItem('user')
    const logout = () => {
        localStorage.clear()
        history.push('/')
    }
      return(
        <DivHeader>
            <DivLogo>
                <Link to="/feed">
                    <ImgLogo src={logo} />
                </Link>
            </DivLogo>
            <DivUser>
                {user}
            </DivUser>
            <DivLogout onClick={logout}>
                Logout
            </DivLogout>
        </DivHeader>)
}

export default HeaderLogout;