import services from '../../../services.json';
import css from './Hero.module.css';
import ServicesHomePage from '../ServicesHomePage/ServicesHomePage';

function Hero() {
    return (
        <div className={css.hero}>
            <div className={css.container}>
                <h1 className={css.title}>
                    We provide a bespoke service for all custom vehicle solutions.<br/>
                    <span>Trust our skilled technicians to restore your vehicle to its pre-accident condition.</span>
                </h1>
            </div>
            <div>
                <ServicesHomePage services={services} />
            </div>
        </div>
    )
};

export default Hero;