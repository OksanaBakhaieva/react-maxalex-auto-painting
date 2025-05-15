import AnchorLink from '../AnchorLink/AnchorLink';
import clsx from 'clsx';
import css from './NavLinks.module.css';
import { Link } from 'react-router-dom';

function NavLinks({ text, href, variant }) {
  const NavLinkClasses = clsx(css.nav_link, {
    [css.header]: variant === 'header',
    [css.modal]: variant === 'modal',
  });

  const isAnchor = href.includes('#');
  const isInternal = href.startsWith('/');

  if (isAnchor) {
    const [path = '/', hash] = href.split('#');
    return (
      <AnchorLink to={path} hash={hash} className={NavLinkClasses}>
        {text}
      </AnchorLink>
    );
  }

  if (isInternal) {
    return (
      <Link to={href} className={NavLinkClasses}>
        {text}
      </Link>
    );
  }

  return (
    <a href={href} className={NavLinkClasses} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
}

export default NavLinks;
