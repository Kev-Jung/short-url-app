import './App.css';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Informational from './components/Informational/Informational';
import UrlInterface from './components/UrlInterface/UrlInterface';
import BoostCTA from './components/BoostCTA/BoostCTA';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <UrlInterface />
      <Informational />
      <BoostCTA />
      <Footer />
    </>
  );
}

export default App;
