import React from 'react';
import "./banner.scss"

const Banner = (props) => {
  
        return (
          <div className='Banner'>
            <img src={props.bannerImg} alt={props.alt} />
            <h1>{props.text}</h1>
          </div>
        );
    
  } ;

export default Banner;