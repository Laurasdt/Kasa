import './cardList.scss'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../card/Card';

const CardList = () => {
  const [housings, setHousings] = useState([]);

  useEffect(() => {
    fetch('https://laurasdt.github.io/Kasa-P8/data.json')
      .then((result) => result.json())
      .then((housings) => setHousings(housings))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="cards__wrapper">
      {housings.map(({ id, title, cover }) => (
        <article key={id}>
          <Link to={`/housing/${id}`} className="card__wrapper">
            <Card cover={cover} title={title} />
          </Link>
        </article>
      ))}
    </section>
  );
};

export default CardList;