import "banner.scss"

function Banner(image, text) {
    return (
        <div className='banner'>
            <img src={image} alt='Image paysage' />
            <h2>{{text}}</h2>
        </div>
 ); 
}

export default Banner;