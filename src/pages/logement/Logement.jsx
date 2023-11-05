import './logement.scss'
import Carrousel from '../../components/carrousel/Carrousel'
import { useParams } from 'react-router-dom';

function LogementPage() {
  const { id } = useParams();
  console.log(id);
  return (
    <section className='LogementPage'>

        <Carrousel />

    </section>
  )
};



export default LogementPage;