import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className='menu-icon' onClick={handleClick} >
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <Link to="#home" className="navbar-logo">
                        UBG <i className="fas fa-bomb" />
                    </Link>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='#home' className='nav-links' onClick={closeMobileMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='#news' className='nav-links' onClick={closeMobileMenu}>
                                NEWS
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='#roadmap' className='nav-links' onClick={closeMobileMenu}>
                                ROAD MAP
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='#about' className='nav-links' onClick={closeMobileMenu}>
                                ABOUT
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='#support' className='nav-links' onClick={closeMobileMenu}>
                                SUPPORT
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='#prereg' className='nav-links' onClick={closeMobileMenu}>
                                PRE-REGISTER
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
