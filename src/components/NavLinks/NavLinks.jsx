import clsx from 'clsx';
import css from './NavLinks.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function NavLinks({ text, href, variant}) {
    const NavLinksClasses = clsx(css.nav_link,
        {
            [css.header]: variant === 'header',
            [css.modal]: variant === 'modal'
        }
    );

    const navigate = useNavigate();
    const location = useLocation();

    const handleAnchorClick = (e) => {
        e.preventDefault();
        const [path, hash] = href.split('#');
        if (location.pathname !== `/${path}` && path) { //переход на нужную страничку
            navigate(`/${path}`, {    // путь,куда я хочу отправить
                state: {                //состояние маршрута, доступно на целевой странице через useLocation()
                    scrollTo: hash
                }
            });
        } else if (hash) {     //eсли мы уже на нужной странице, то просто скроллим до указанной в hash секции
            const section = document.getElementById(hash);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate(path);     //для случаев, когда наши линки просто ведут на страничку
        }
    }

    const isInternal = href.startsWith("/");
    const isAnchor = href.startsWith('#');

    if (isInternal) {
        return <Link className={NavLinksClasses} to={href}>{text}</Link>
    } else if (href.includes('#')) {
        return <a className={NavLinksClasses} href={href} onClick={handleAnchorClick}>{text}</a>
    } else {
        return <a className={NavLinksClasses} href={href}>{text}</a>
    }
}



export default NavLinks;