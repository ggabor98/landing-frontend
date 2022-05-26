import React from 'react'

import '../styles/home.scss';

export const Home = () => {

    return (
        <div className='container-home'>
            <div className='container-home-content'>
                <span className='title-home'> Make <br/> remote work </span>
                <p className='description-home'> Get your team in sync, no matter your location. <br /> Streamline processes, create team rituals, and <br/> watch productivity soar.</p>
                <button className='learn-more-action'> Learn more </button>

                <div className='container-companies'>
                    <div className='databiz-image' />
                    <div className='audiophile-image' />
                    <div className='meet-image' />
                    <div className='maker-image' />
                </div>
            </div>
            <div className='container-image-home' />
        </div>
    )
}
