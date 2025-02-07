import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import Modal from '../Modal/Modal';
import css from './Header.module.css';

function Header() {
    return (
        <div className={css.header}>
            <Logo />
            <Nav />
            <Button text="Request a quote" />
            <Modal/>
        </div>
    )
};

export default Header;