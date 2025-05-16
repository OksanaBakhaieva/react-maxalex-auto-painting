import css from "./Socials.module.css";
import { SlPhone, SlSocialFacebook, SlEnvolope } from "react-icons/sl";


function Socials() {
    return (
        <>
            <ul className={css.list}>
                <li>
                    <a className={css.socials_link}  href="https://www.facebook.com/share/15YqPcVzV5/?mibextid=wwXIfr" target="_blank">
                        <SlSocialFacebook size={24} color="white"/>
                    </a>
                </li>
                <li>
                    <a className={css.socials_link}  href="mailto:makalex.office@gmail.com" target="_blank">
                        <SlEnvolope size={24} color="white"/>
                    </a>
                </li>
                <li>
                    <a className={css.socials_link} href="https://wa.me/447468790981" target="_blank">
                        <SlPhone size={24} color="white" />
                    </a>
                </li>
            </ul>
        </>
    )
};

export default Socials;