import React from 'react';
import data from '../../data/logements.json';
import Card from '../card/carteLogement';
import '../cardList/cardList.scss'


const CardList = () => {

  return (

    <section className="Cards">
    <div className="card-container">
      {data.map((logement) => (
        <Card key={logement.id} logement={logement} />
      ))}
    </div>
  </section>
  );
};

export default CardList;