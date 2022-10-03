import './App.css';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Informational from './components/Informational/Informational';
import UrlInterface from './components/UrlInterface/UrlInterface';
import BoostCTA from './components/BoostCTA/BoostCTA';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <UrlInterface />
      <Informational />
      <BoostCTA />
    </div>
  );
}

export default App;
