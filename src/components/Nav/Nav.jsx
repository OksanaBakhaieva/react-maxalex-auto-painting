import NavLink from '../NavLink/NavLink';
import clsx from 'clsx';
import css from './Nav.module.css';

function Nav({ variant }) {
    const NavClasses = clsx(css.nav,
        {
            [css.header]: variant === 'header',
            [css.modal]: variant === 'modal'
        }
    );
    
    return (
            <nav className={NavClasses}>
                <NavLink text="Services" href="#services" />
                <NavLink text="About Us" href="#about"/>
                <NavLink text="FAQ" href="#faq" />
                <NavLink text="Reviews" href="#reviews" />
                <NavLink text="Contacts" href="#contacts" />
            </nav>
    )
}

export default Nav;