import React from 'react';
import "./banner.scss"

const Banner = (props) => {
  
        return (
          <section className='Banner'>
            <img src={props.bannerImg} alt={props.alt} />
            <h1>{props.text}</h1>
          </section>
        );
    
  } ;

export default Banner;