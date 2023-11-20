import React from 'react';
import StarActive from '../../Assets/starRouge.png';
import StarInactive from '../../Assets/starGrise.png';
import './rating.scss';

const Rating = ({ rating = 0 }) => {
  const maxRating = 5;
  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    const starImage = i <= rating ? StarActive : StarInactive;
    stars.push(<img src={starImage} alt={i <= rating ? "Etoile pleine" : "Etoile vide"} className="Star" key={i} />);
  }

  return <div className="Rating">{stars}</div>;
};

export default Rating;