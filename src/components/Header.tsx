import React from 'react'
import { Navigation } from './Navigation'

import '../styles/header.scss';

export const Header = () => {

    return (
        <div className='container-header'>
            <div className='container-header-content-navigation'>
                <span className='title-header'>snap</span>
                <Navigation />
            </div>

            <div className='container-header-content-actions'>
                <button className='login-action'>Login</button>
                <button className='register-action'>Register</button>
            </div>
        </div>
    )
}
