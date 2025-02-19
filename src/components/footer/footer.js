import React from "react";
import { Link } from 'react-router-dom';
import './style.css';
import Logo from '../../assets/logo.png';


function Footer() {

    return (
        <footer>
            <Link to='/'>
                <img id="logo" src={Logo} alt="logopp" />
            </Link>
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvivdo por: Jhonatas G</span>
        </footer>
    );
}

export default Footer;