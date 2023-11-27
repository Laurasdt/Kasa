import './collapse.scss';
import React, { useState } from 'react';
import arrow from '../../Assets/Arrow.png';


export default function Collapse({ title, content }) {
  const [isOpen, setOpen] = useState(false);

  function toggleCollapse() {
    setOpen((prev) => !prev);
  }

  return (
    <div className='collapse'>
      <div className='header' onClick={toggleCollapse}>
        <h3>{title}</h3>
        <img
          className={`arrow ${isOpen === false ? 'arrow_up' : 'arrow_down'}`}
          src={arrow}
          alt='show content'
        />
      </div>
      {isOpen && (
        <div className='content'>
          {Array.isArray(content) ? (
            content.map((item, index) => {
              return (
                <div key={index} className='content-item'>
                  <p>{item}</p>
                </div>
              );
            })
          ) : (
            <div className='content-item'>
              <p>{content}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function LogementCollapse({ description, equipement }) {
  return (
    <div className='Collapses'>
      <Collapse key='0' title='Description' content={description} />
      <Collapse key='1' title='Equipements' content={equipement} />
    </div>
  );
}