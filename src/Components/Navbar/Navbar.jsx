import React from 'react';
import { FaBars, FaSearch, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo2 from '../../assets/logo2.png';

const Navbar = ({ setSidebar }) => {

    const sidebar_toggle = () => {
        setSidebar((prev) => !prev);
    }

    return (
        <nav className='flex-div'>
            <div className="nav-left flex-div">
                <FaBars className="menu-icon icon-size" onClick={sidebar_toggle} />
                <Link to='/'> <img src={logo2} alt="" className="logo" /></Link>
            </div>
            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input type="text" placeholder="Search" />
                    <FaSearch className="icon-size" />
                </div>
            </div>
            <div className="nav-right flex-div">
                <FaUserCircle className="user-icon" />
            </div>
        </nav>
    );
}

export default Navbar;
