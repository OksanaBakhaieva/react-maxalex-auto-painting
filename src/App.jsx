import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import FAQ from './components/FAQ/FAQ';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Reviews from './components/Reviews/Reviews';
import Services from './components/Services/Services';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <FAQ />
      <Reviews/>
      <Contact />
      
    </>
  )
};

export default App;
