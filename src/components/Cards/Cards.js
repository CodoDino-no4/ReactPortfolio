import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import img1 from '../../img-1.jpg';

function Cards() {
    return (
        <>
            <div className='cards'>
                <h1>Check out my stuff!</h1>
                <div className="cards-container">
                    <div className="cards-wrapper">
                        <ul className="cards-items">
                            <CardItem
                                src={img1} text='Some cool software shiz'
                                label='Computer'
                                path='/project1'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;
