import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';

import { SlMenu } from "react-icons/sl";

import css from './Header.module.css';
import { useState } from 'react';

function Header() {
     const [isModalOpen, setModalOpen] = useState(false);

    function openModal() {
        return setModalOpen(true);
    };

    function closeModal() {
        return setModalOpen(false);
    };
    return (
        <div className={css.header}>
            <Logo />
            <div className={css.logo}>
                {/* <img src="/maxalex_logo.jpg" width="400" height="75" alt="maxalex company, automotive painting" /> */}
                <Nav />
                
            </div>
            <div>
                <Button text="Request a quote" />
            </div>
            <button className={css.menu_open_button} onClick={openModal} type="button">
                <SlMenu size={24} color="white"/>    
            </button>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    )
};

export default Header;