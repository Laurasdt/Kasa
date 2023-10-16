import './footer.scss'
import Logo from '../../Assets/LogoFooter.png'

function Footer() {
    return (
        <footer className='Footer'>
            <div className='Footer_img'><img src={Logo} alt='Logo de bas de page' /></div>
            <div className='Footer_txt'><p>© 2020 Kasa. All rights reserved</p></div>
        </footer>
    )
}


export default Footer;