import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Contact.css';

function Contact() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className='menu-icon' onClick={handleClick} >
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='#home' className='nav-links' onClick={closeMobileMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='#about' className='nav-links' onClick={closeMobileMenu}>
                                ABOUT
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='#projects' className='nav-links' onClick={closeMobileMenu}>
                                PROJECTS
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='#contact' className='nav-links' onClick={closeMobileMenu}>
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                    <Link to="#home" className="navbar-logo">
                        ALICE <i className="fas fa-ghost" />
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
