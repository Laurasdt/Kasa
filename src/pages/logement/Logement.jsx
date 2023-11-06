import './logement.scss'
import Carrousel from '../../components/carrousel/Carrousel'
import { useParams } from 'react-router-dom';
import data from '../../data/logements.json';
import NotFound from '../notFound/NotFound'

function LogementPage(props) {

  const { id } = useParams();
  console.log(id);

  const logement = data.find(logement => logement.id === id);
  const title = logement ? logement.title : "";
  const location = logement ? logement.location : "";

  if(logement === undefined){
    return <NotFound />
}
  return (
    <section className='LogementPage'>

        <Carrousel slides={logement.pictures} />
        <h1>{title}</h1>
        <h2>{location}</h2>
    
    </section>
  )
};



export default LogementPage;