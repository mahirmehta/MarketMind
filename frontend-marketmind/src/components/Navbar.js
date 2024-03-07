import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ isLoggedIn, handleLogout }) {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    useEffect(() => {
        // Check if user is logged in and update the button accordingly
        if (isLoggedIn) {
            setButton(false); // Hide Sign Up button if user is logged in
        }
    }, [isLoggedIn]);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        MarketMind
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/dashboard'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/about-us-&-contact-us'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                About Us
                            </Link>
                        </li>
                        {isLoggedIn ? (
                            <li className='nav-item'>
                                <Button buttonStyle="btn--logout" onClick={handleLogout}>Log Out</Button>
                            </li>
                        ) : (
                            <li className='nav-item'>
                                <Link
                                    to='/sign-up'
                                    className='nav-links-mobile'
                                    onClick={closeMobileMenu}
                                >
                                    Sign up
                                </Link>
                            </li>
                        )}
                    </ul>
                    {button && !isLoggedIn && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;
