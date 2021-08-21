import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import img1 from '../../img-1.jpg';
//in a database preferably
function Cards() {
    return (
        <>
            <div className='cards'>
                <h1>PROJECTS</h1>
                <div className="cards-container">
                    <div className="cards-wrapper">
                        <ul className="cards-items">
                            <CardItem
                                src={img1} text='CSS used to create a stunning contact form'
                                language='CSS'
                                path='/project1'
                                colourCode='#1f98f4'
                            />
                            <CardItem
                                src={img1} text='CSS used to create a stunning contact form'
                                language='CSS'
                                path='/project1'
                                colourCode='#1f98f4'
                            />
                        </ul>
                        <ul className="cards-items">
                            <CardItem
                                src={img1} text='CSS used to create a stunning contact form'
                                language='CSS'
                                path='/project1'
                                colourCode='#1f98f4'
                            />
                            <CardItem
                                src={img1} text='CSS used to create a stunning contact form'
                                language='CSS'
                                path='/project1'
                                colourCode='#1f98f4'
                            />
                            <CardItem
                                src={img1} text='CSS used to create a stunning contact form'
                                language='CSS'
                                path='/project1'
                                colourCode='#1f98f4'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;
