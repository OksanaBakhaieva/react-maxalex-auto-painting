import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import FAQ from './components/FAQ/FAQ';
import Header from './components/Header/Header';
import HeroLayout from './components/HeroLayout/HeroLayout';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <>
      <Header />
      <HeroLayout />
      <About />
      <FAQ />
      <Reviews/>
      <Contact />
      
    </>
  )
};

export default App;
