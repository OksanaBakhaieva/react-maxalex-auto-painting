import Services from '../Services/Services';
import services from '../../../services.json';
import css from './Hero.module.css';

function Hero() {
    return (
        <div className={css.hero}>
            <div className={css.container}>
                <h1 className={css.title}>Makalex - we provide a bespoke service for all custom vehicle solutions.</h1>
                <p className={css.text}>Trust our skilled technicians to restore your vehicle to its pre-accident condition</p>
                
           </div>
            <Services services={services} />
        </div>
    )
};

export default Hero;