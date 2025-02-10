import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import Modal from '../Modal/Modal';
import Socials from '../Socials/Socials';

import css from './Header.module.css';

function Header() {
    return (
        <div className={css.header}>
            <Logo />
            <div className={css.logo}>
                <img src="/maxalex_logo.jpg" width="400" height="75" alt="maxalex company, automotive painting" />
                <Nav />
            </div>
            <address className={css.contacts}>
                <a className={css.link} href="tel:+447468790981" target="_blank">
                    <p className={ css.phone}>+(44)746 879 0981</p>
                    {/* <svg width="32" height="32">
                        <use href="/sprite.svg#icon-phone"></use>
                        <use href={`${import.meta.env.BASE_URL}sprite.svg#icon-phone`}></use>
                    </svg>
                     */}
                </a>
                <Socials/>
            </address>
            
            <Modal/>
        </div>
    )
};

export default Header;