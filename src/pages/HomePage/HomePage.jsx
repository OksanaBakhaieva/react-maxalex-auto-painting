import About from '../../components/About/About';
import FAQ from '../../components/FAQ/FAQ';
import Hero from '../../components/Hero/Hero';
import Reviews from '../../components/Reviews/Reviews';
import css from './HomePage.module.css';

function HomePage() {
    return (
        <div className="container" id="home">
            <Hero />
            <About />
            <FAQ/>
            <Reviews />
        </div>
    )
};

export default HomePage;