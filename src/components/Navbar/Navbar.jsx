import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import FriendsBlockContainer from './FriendsBlock/FriendsBlockContainer';

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink activeClassName={s.activeLink} to="/profile">Profile</NavLink></div>
            <div className={s.item}><NavLink activeClassName={s.activeLink} to="/dialogs">Messages</NavLink></div>
            <div className={s.item}><NavLink activeClassName={s.activeLink} to="/users">Users</NavLink></div>
            <div className={s.item}><NavLink activeClassName={s.activeLink} to="/news">News</NavLink></div>
            <div className={s.item}><NavLink activeClassName={s.activeLink} to="/music">Music</NavLink></div>
            <div className={s.item}><NavLink activeClassName={s.activeLink} to="/settings">Settings</NavLink></div>
            <FriendsBlockContainer /> 
        </nav>
    );
}

export default Navbar;