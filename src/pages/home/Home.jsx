import './home.scss';
import Banner from '../../components/banner/Banner'
import CardList from '../../components/cardList/CardList';
import bannerImg from '../../Assets/IMG.png';


function Home() {
    return (
        <main className='home'>
            <Banner bannerImg={bannerImg} alt="Bannière de la page Home" text="Chez vous, partout et ailleurs"/>
            <CardList /> 
        </main>
       
    )
}

export default Home;

