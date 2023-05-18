
import React from 'react';
import './Card.css';
const Card = ({ imageUrl, title, description }) => {
  return (
    <div className='d-flex justify-content-center'>
      <div className="card-container">
        <img src={imageUrl} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>

  );
};

export default Card;
