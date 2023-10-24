import "./banner.scss"
import { useLocation } from 'react-router-dom';
import Img1 from '../../Assets/IMG.png';
import Img2 from '../../Assets/ImageSource2.png';

const Banner = () => {
    const location = useLocation();
  
  
    const renderContent = () => {
      if (location.pathname === '/') {
        return (
          <div className='Banner'>
            <img src={Img1} alt="image d'un paysage" />
            <h1>Chez vous, partout et ailleurs</h1>
          </div>
        );
      } else if (location.pathname === '/about') {
        return (
          <div className='Banner'>
            <img src={Img2} alt="autre image" />
          </div>
        );
      } else {
        return null; 
      }
    };
  
    return renderContent();
  };
  

export default Banner;