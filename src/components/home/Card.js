import React from 'react'
import './home.css';

const Card = ({ image, title, description }) => {
    return (
        <div className="box">
            <div className="image">
                <img src={image} alt="something" />
            </div>
            <div className="title">{title}</div>
            <div className="desc">{description}</div>
        </div>
    )
}

export default Card