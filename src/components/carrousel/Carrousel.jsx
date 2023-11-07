import './carrousel.scss';
import { useState } from 'react';
import ArrowForward from '../../Assets/ArrowForward.png'
import ArrowBack from '../../Assets/ArrowBack.png'

const Carrousel = ({ slides }) => {
  const slidesLength = slides.length;
  const [place, setPlace] = useState(0);
  const showArrows = slidesLength > 1;

  const SlideBack = () => {
    setPlace(place === 0 ? slidesLength - 1 : place - 1);
  };

  const SlideForward = () => {
    setPlace(place === slidesLength - 1 ? 0 : place + 1);
  };

  return (
    <section className='Carrousel'>
      {slides.map((slide, index) => (
        <div key={index} className="Carrousel__container">
          {index === place && (
            <div>
              <img className='Slide'src={slide} alt="Photo du logement"/>
              {showArrows && (
                <>
             
                  <img
                    className='ArrowBack'
                    src={ArrowBack}
                    alt='flèche back'
                    onClick={SlideBack}
                  />
                  <img
                    className='ArrowForward'
                    src={ArrowForward}
                    alt="flèche next"
                    onClick={SlideForward}
                  />
                
                </>
                )}
           </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Carrousel;