import React, { useState } from 'react'

import '../styles/navigation.scss';
import { NavMenu } from './NavMenu';

export const Navigation = () => {
    const [showNavMenu, setShowNavMenu] = useState(false);

    return (
        <>
            <ul className="nav-bar-container">
                <li className="nav-bar-features">
                    <span className='nav-bar-option-title title'>Features</span>
                    <ul className="nav-bar-features-subnav">
                        <li className='nav-bar-todo-list'>Todo List</li>
                        <li className='nav-bar-calendar'>Calendar</li>
                        <li className='nav-bar-reminders'>Reminders</li>
                        <li className='nav-bar-planning'>Planning</li>
                    </ul>
                </li>
                <li className="nav-bar-company">
                    <span className='nav-bar-option-title title'>Company </span>
                    <ul className="nav-bar-company-subnav">
                        <li>History</li>
                        <li>Our Team</li>
                        <li>Blog</li>
                    </ul>
                </li>
                <li className='title'>Careers</li>
                <li className='title'>About</li>
            </ul>
            <div className='nav-bar-container-mobile' onClick={() => setShowNavMenu(true)}>
                <hr />
                <hr />
                <hr />
            </div>

            { showNavMenu && <NavMenu onClose={() => setShowNavMenu(false)} />}
        </>
    )
}
