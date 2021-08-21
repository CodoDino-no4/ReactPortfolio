import React from 'react';
import { Link } from "react-router-dom";
import './Cards.css';

function CardItem(props) {
    return (
        <>
            <div>
                <li className='cards-item'>
                    <Link className='cards-item-link' to={props.path}>
                        <figure className="cards-item-pic-wrap" data-category={props.language}>
                            <img src={props.src} alt="Software Image" className="cards-item-img" />
                        </figure>
                        <div className="cards-item-info">
                            <h5 className="cards-item-text">{props.text}</h5>
                        </div>
                    </Link>
                </li>
            </div>
        </>
    )
}

export default CardItem
