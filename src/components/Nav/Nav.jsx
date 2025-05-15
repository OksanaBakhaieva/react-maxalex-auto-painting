import NavLinks from '../NavLinks/NavLinks';
import clsx from 'clsx';
import css from './Nav.module.css';

function Nav({ variant }) {
  const NavClasses = clsx(css.nav, {
    [css.header]: variant === 'header',
    [css.modal]: variant === 'modal',
  });

  return (
    <nav className={NavClasses}>
      <NavLinks text="Home" href="/" variant={variant} />
      <NavLinks text="Services" href="/services" variant={variant} />
      <NavLinks text="About Us" href="/#about" variant={variant} />
      <NavLinks text="FAQ" href="/#faq" variant={variant} />
      <NavLinks text="Reviews" href="/#reviews" variant={variant} />
      <NavLinks text="Contacts" href="/#contacts" variant={variant} />
    </nav>
  );
}

export default Nav;
