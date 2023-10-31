import React from 'react';
import "./card.scss"

const Card = (props) => {

        return (
          <div className='Card'>
            {/* {props.logement.id} */}
            <p>{props.logement.title}</p>
            <img src={props.logement.cover} alt={props.logement.title} />
          </div>
        );
    
  } ;

export default Card;