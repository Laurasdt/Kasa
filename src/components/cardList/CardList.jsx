import React from 'react';
import data from '../../data/logements.json';
import Card from '../card/carteLogement';
import '../cardList/cardList.scss';
import { NavLink } from 'react-router-dom';

const CardList = () => {

  return (
    <section className="Cards">
      <div className="card-container">
        {data.map((logement) => (
          <NavLink key={logement.id} to={`/logement/${logement.id}`}>
            <Card logement={logement} />
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default CardList;