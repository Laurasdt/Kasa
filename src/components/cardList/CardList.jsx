import React from 'react';
import data from '../../data/logements.json';
import Card from '../card/carteLogement';


const CardList = () => {

  return (

    <section className="Cards">
      {data.map((logement) => (
            <Card
              key={logement.id}
              logement={logement}
            />
          ))}
    </section>
  );
};

export default CardList;