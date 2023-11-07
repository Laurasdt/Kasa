import React from 'react';
import Carrousel from '../../components/carrousel/Carrousel';
import { useParams } from 'react-router-dom';
import data from '../../data/logements.json';
import NotFound from '../notFound/NotFound';
import Rating from '../../components/rating/Rating';
import User from '../../components/User/User';
import Tags from '../../components/tags/Tags';
import LogementCollapse from '../../components/logementCollapse/LogementCollapse'; 
import './logement.scss';

function LogementPage(props) {
  const { id } = useParams();
  const logement = data.find((logement) => logement.id === id);
  const collapseDescription = logement ? logement.description : "";
  const collapseEquipement = logement ? logement.equipments : "";

  if (logement === undefined) {
    return <NotFound />;
  }

  return (
    <section className='LogementPage'>
      <Carrousel slides={logement.pictures} />
      <h1>{logement.title}</h1>
      <h2>{logement.location}</h2>
      <Rating rating={logement.rating} />
      <User name={logement.host.name} profilePicture={logement.host.picture} />
      <Tags tags={logement.tags} />
      <LogementCollapse
          collapseDescription={collapseDescription}
          collapseEquipement={collapseEquipement}
        />
    </section>
  );
}

export default LogementPage;