import './logement.scss'
import Carrousel from '../../components/carrousel/Carrousel'
import { useParams } from 'react-router-dom';
import data from '../../data/logements.json';
import NotFound from '../notFound/NotFound';
import Rating from '../../components/rating/Rating'
import User from '../../components/User/User'
import Tags from '../../components/tags/Tags'

function LogementPage(props) {

  const { id } = useParams();
  console.log(id);

  const logement = data.find(logement => logement.id === id);
  const title = logement ? logement.title : "";
  const location = logement ? logement.location : "";
  const name = logement ? logement.host.name: "";
  const profilPicture = logement? logement.host.picture : "";
  const tags = logement ? logement.tags : [];

  if(logement === undefined){
    return <NotFound />
}
  return (
    <section className='LogementPage'>

        <Carrousel slides={logement.pictures} />
        <h1>{title}</h1>
        <h2>{location}</h2>
        <Rating rating={logement.rating} />
        <User name={name} profilePicture={profilPicture} />
        <Tags tags={tags} />   
    </section>
  )
};



export default LogementPage;