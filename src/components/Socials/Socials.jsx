import css from "./Socials.module.css";

function Socials() {
    return (
        <>
            <ul className={css.list}>
                <li>
                    <a className={css.socials_link}  href="mailto:makalex.office@gmail.com" target="_blank">
                        <svg width="40" height="40">
                            <use href="/sprite.svg#icon-mail"></use>
                        </svg>
                    </a>
                </li>
                <li>
                    <a className={css.socials_link} href="https://wa.me/447468790981" target="_blank">
                        <svg width="40" height="40">
                            <use href="/sprite.svg#icon-whatsapp"></use>
                        </svg>
                    </a>
                </li>
            </ul>
        </>
    )
};

export default Socials;