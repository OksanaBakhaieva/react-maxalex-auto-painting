import css from './Hero.module.css';

function Hero() {
    return (
        <div className={css.hero}>
            <div className={css.container}>
                <h2 className={css.title}>Makalex - we provide a bespoke service for all custom vehicle solutions.</h2>
                <p className={css.text}>Trust our skilled technicians to restore your vehicle to its pre-accident condition</p>
           </div>
           
        </div>
    )
};

export default Hero;