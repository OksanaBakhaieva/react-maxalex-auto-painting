import About from '../../components/About/About';
import FAQ from '../../components/FAQ/FAQ';
import Hero from '../../components/Hero/Hero';
import Reviews from '../../components/Reviews/Reviews';
import css from './HomePage.module.css';

function HomePage() {
    return (
        <>
            <Hero />
            <About />
            <FAQ/>
            <Reviews />
        </>
    )
};

export default HomePage;