import css from './Logo.module.css';

function Logo() {
    return (
        <>
            <img className={css.logo} src='/makalex.logo.jpg' width="100" height="100"/>
        </>
    )
};

export default Logo;