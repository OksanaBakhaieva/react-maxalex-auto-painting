import Title from '../Title/Title';
import css from './About.module.css';

function About() {
    return (
        <div className={css.container} id='about'>
            <Title variant="light" title="About us"/>
            <h3 className={css.subtitle}>Trust our skilled technicians to restore your vehicle</h3>
            <div className={css.wrapper}>
                <p className={css.text}>Makalex is dedicated to providing superior custom vehicle solutions tailored to your specific needs. Our skilled technicians have years of experience in restoring vehicles to their pre-accident condition. We take pride in delivering exceptional craftsmanship and attention to detail.</p>
                <img src="/public/maxalex.logo.jpg" className={css.image} alt=""/>
            </div>
        </div>
    )
};

export default About;