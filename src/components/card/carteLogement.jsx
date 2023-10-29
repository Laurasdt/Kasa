import React from 'react';
import "./card.scss"

const Card = (props) => {
  
        return (
          <div className='card'>
            {props.logement.id}
            {props.logement.title}
            
          </div>
        );
    
  } ;

export default Card;