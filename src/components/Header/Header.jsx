import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import Modal from '../Modal/Modal';
import Socials from '../Socials/Socials';
import { SlPhone } from "react-icons/sl";

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
            <address className={css.contacts}>
                {/* <a className={css.link} href="tel:+447468790981" target="_blank">
                    <p className={css.phone}>+ (44) 746 879 0981</p>
                </a> */}
                <Socials/>
            </address>
            <button className={css.menu_open_button} onClick={openModal} type="button">
                <SlPhone size={24} color="white"/>    
            </button>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    )
};

export default Header;