import React from "react";
import { Link } from 'react-router-dom';
import './style.css';
import Logo from '../../assets/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)



function Header() {

    return (
        <header>
            <img id='logo' src={Logo} alt="logopp" />      
            <nav>
                <ul>
                    <Link style={{ textDecoration: 'none' }} to='/'>
                        <li>Home</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/links'>
                        <li>Cast</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/elenco'>
                        <li>Links</li>
                    </Link>

                    <li>Comments</li>

                    
                </ul>

            </nav>
                <div class="social-media">
                        <FontAwesomeIcon icon={["fab", "github"]} />  
                    <a href="https://www.instagram.com/jhonsstos/" target="_blank" rel="noopener noreferrer">
                    </a>

                    <a href="https://www.facebook.com/jhonsstos" target="_blank" rel="noopener noreferrer">
                        
                    </a>

                    <a href="https://github.com/jhonsstoss" target="_blank" rel="noopener noreferrer">
                            
                    </a>

                    <a href="https://www.linkedin.com/in/jhonatas-santos-a18331252/" target="_blank" rel="noopener noreferrer">
                        
                    </a>
                </div>
        </header>
    );
}

export default Header;

// style={{ textDecoration: 'none' }}