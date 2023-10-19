import './collapse.scss';
import React, { useState } from 'react';
import arrow from '../../Assets/Arrow.png';

export default function Collapse({ title, content, open, setOpen }) {
  const toggleCollapse = () => {
    setOpen(open === title ? null : title);
  };

  return (
    <div className={`collapse ${open === title ? 'open' : ''}`}>
      <h3 className='collapse_title' onClick={toggleCollapse}>
        {title}
        <img
          className={`arrow ${open === title ? 'arrow_up' : 'arrow_down'}`}
          src={arrow}
          alt='show content'
        />
      </h3>
      <div className='collapse_content'>
        {Array.isArray(content) ? (
          content.map((item, index) => {
            return <p key={index}>{item}</p>;
          })
        ) : (
          content
        )}
      </div>
    </div>
  );
 
}