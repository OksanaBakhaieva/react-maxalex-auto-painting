import clsx from 'clsx';
import css from './NavLink.module.css';

function NavLink({ text, href, variant}) {
    const NavLinkClasses = clsx(css.nav_link,
        {
            [css.header]: variant === 'header',
            [css.modal]: variant === 'modal'
        }
    );
    return (
        <>
            <a className={NavLinkClasses} href={href}>{text}</a>
        </>
    )
}

export default NavLink;