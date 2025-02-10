import clsx from 'clsx';
import css from './Title.module.css';

function Title({ title, variant }) {
    const aboutClasses = clsx(css.title, {
        [css.light] : variant === "light",
        [css.dark] : variant === "dark"
    });
    
    return (
        <>
            <h2 className={aboutClasses}>{title}</h2>
        </>
    )
};

export default Title;