import "./about.scss";
import Img from '../../Assets/ImageSource2.png';


function About() {
    return (
        <section>
        <div className='About'>
        <div className='About_img'><img src={Img} alt='Image paysage' /></div>
        
    </div>
    </section>
 ); 
}

export default About;