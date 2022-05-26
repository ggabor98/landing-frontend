import React, { useState } from 'react'
import '../styles/nav-menu.scss';

export const NavMenu = (props: any) => {
    const [selected, setSelected] = useState(-1);
    
    return (
        <div className="animate__animated animate__backInRight nav-menu-container">
            <div className='container-close-button' onClick={() => { props.onClose && props.onClose()}}><hr /><hr /></div>
            <ul className="nav-bar-menu-container">
                <li onClick={() => setSelected(selected === 0 ? -1 : 0)}>
                    <span className="nav-bar-menu-title" >Features</span>
                    { selected === 0 && <ul className='nav-bar-menu-container-subnav'>
                        <li className='nav-bar-menu-todo-list'>Todo List</li>
                        <li className='nav-bar-menu-calendar'>Calendar</li>
                        <li className='nav-bar-menu-reminders'>Reminders</li>
                        <li className='nav-bar-menu-planning'>Planning</li>
                    </ul> }
                </li>
                <li onClick={() => setSelected(selected === 1 ? -1 : 1)}>
                    <span className='nav-bar-menu-title'>Company </span>
                    { selected === 1 && <ul className='nav-bar-menu-container-subnav'>
                        <li>History</li>
                        <li>Our Team</li>
                        <li>Blog</li>
                    </ul> }
                </li>
                <li className='title'>Careers</li>
                <li className='title'>About</li>
            </ul>

            <div className='container-header-content-menu-actions'>
                <button className='login-action-menu'>Login</button>
                <button className='register-action-menu'>Register</button>
            </div>
        </div>
    )
}
