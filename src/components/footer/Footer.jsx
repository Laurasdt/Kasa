import './footer.scss'
import Logo from '../../Assets/LogoFooter.png'

function Footer() {
    return (
        <footer className='Footer'>
            <img src={Logo} alt='Logo de bas de page' />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}


export default Footer;