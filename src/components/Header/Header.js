import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <NavLink to="/" className='nav-link'>Home</NavLink>
                    <NavLink to="/blogs" className='nav-link'>Blogs</NavLink>
                    <NavLink to="/contact" className='nav-link'>Contact</NavLink>
                    <NavLink to="/about" className='nav-link'>About</NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;