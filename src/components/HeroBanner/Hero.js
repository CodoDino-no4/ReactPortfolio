import React from 'react';
import '../../App.css';
import './Hero.css';
import video from '../../video-2.mp4'

function Hero() {
    return (
        <div className='hero-container'>
            <video src={video} autoPlay loop muted />
            <h1>ALICE</h1>
        </div>
    );
}

export default Hero;
