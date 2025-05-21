import services from '../../../services.json';
import css from './Hero.module.css';
import ServicesHomePage from '../ServicesHomePage/ServicesHomePage';
import Socials from '../Socials/Socials';

function Hero() {
    return (
        <div className={css.hero}>
            <div className={css.container}>
                <h1 className={css.title}>
                    We provide a bespoke service for all custom vehicle solutions
                </h1>
                <p className={css.text}>Trust our skilled technicians to restore your vehicle to its pre-accident condition.</p>
                <div className={css.socials}>
                     <Socials/>

                </div>
               
            </div>
            <div>
                <ServicesHomePage services={services} />
            </div>
        </div>
    )
};

export default Hero;