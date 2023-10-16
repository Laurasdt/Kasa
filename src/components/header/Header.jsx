import './header.scss'
import Logo from '../../Assets/Logo.png'
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className='Header'>
        <div className='Header_logo'><img src={Logo} alt='Logo Header' /></div>
        <nav className='Nav'>
                <NavLink to="/" className={({isActive}) => { return isActive ? "accueilActive" : "accueil"}}>Accueil</NavLink>
                <NavLink to="/about" className={({isActive}) => { return isActive ? "aboutActive" : "about"}}>A propos</NavLink>          
            </nav>
    </header>
 ); 
}

export default Header;