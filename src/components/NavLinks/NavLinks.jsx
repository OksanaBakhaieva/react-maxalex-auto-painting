import clsx from 'clsx';
import css from './NavLinks.module.css';
import { Link } from 'react-router-dom';

function NavLinks({ text, href, variant}) {
    const NavLinksClasses = clsx(css.nav_link,
        {
            [css.header]: variant === 'header',
            [css.modal]: variant === 'modal'
        }
    );

    const isInternal = href.startsWith("/");

    return isInternal ? (
            <Link className={NavLinksClasses} to={href}>{text}</Link>
    ) : (
            <a className={NavLinksClasses} href={href}>{text}</a>
    )
}



export default NavLinks;