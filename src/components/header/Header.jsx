import './header.scss'
import Logo from '../../Assets/Logo.png'

function Header() {
    return (
        <header className='Header'>
        <div className='Header_logo'><img src={Logo} alt='Logo Header' /></div>
    </header>
 ); 
}

export default Header;