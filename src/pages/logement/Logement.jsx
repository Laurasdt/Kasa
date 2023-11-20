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
      <div className='Blocs'>
       
        <div className='Titles'>
        <h1>{logement.title}</h1>
        <h2>{logement.location}</h2>
        <Tags className='Tags' tags={logement.tags} />
        </div>
      
        
    <div className='BlocUser'>
    <User name={logement.host.name} profilePicture={logement.host.picture} />
      <Rating className='Rating' rating={logement.rating} />
     </div>

      </div>
      
      <LogementCollapse
          collapseDescription={collapseDescription}
          collapseEquipement={collapseEquipement}
        />
    </section>
  );
}

export default LogementPage;

