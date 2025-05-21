import { useLocation } from 'react-router-dom';
import About from '../../components/About/About';
import Hero from '../../components/Hero/Hero';
import Reviews from '../../components/Reviews/Reviews';
import css from './HomePage.module.css';
import { useEffect } from 'react';

function HomePage() {
    const location = useLocation();

    useEffect(() => {   // используем т.к. нам нужно проскроллить к секции после navigate
        if (location.state?.scrollTo) {
            const section = document.getElementById(location.state.scrollTo);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div className="container">
            <Hero />
            <About />
            <Reviews />
        </div>
    )
};


export default HomePage;