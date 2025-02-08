import Logo from '../Logo/Logo';
import Title from '../Title/Title';
import css from './Footer.module.css';

function Footer() {
    return (
        <>
            <div className={css.container}>
                <Title title="Contact Us" />
                <div className={css.wrapper}>
                    <p className={css.contact}>Call us on +447468790981</p>
                    <p className={css.contact}>makalex.office@gmail.com</p>
                </div>
                <div className={css.wrapper}>
                    <p className={css.contact}>Unit 133 Lydney Harbour</p>
                    <p className={css.contact}>Estate GL15 4EJ</p>
                </div>
            <p className={css.contact2}>Mon- Fri:  8am- 4pm</p>
            <Logo />
        </div>
        <p className={css.copyright}>&copy; Copyright 2025</p>
        </>
        
    )
};

export default Footer;