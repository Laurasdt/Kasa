import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import NotFound from './pages/notFound/NotFound';
import Logement from './pages/logement/Logement';


function App() {
  return (
    <>
    <BrowserRouter>
     <div className='blocPage'>
       <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='*' element={<NotFound />} />
        <Route path="/logement/:id" element={<Logement />} />
      </Routes>
      </div>
      <Footer /> 
    </BrowserRouter>
    </>
    );
}

export default App;