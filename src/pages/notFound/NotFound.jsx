import './notFound.scss'
import Logo from '../../Assets/404.png'
import { Link } from 'react-router-dom';



function NotFound() {
    return (
       
        <div className='notFound'>
            <img src={Logo} alt='Erreur 404'/>
            <p>Oups ! La page que vous demandez n'existe pas.</p>
            <Link className='notFound_link' to='/'>Retourner sur la page d'accueil</Link>
             </div>
    )
}

export default NotFound;