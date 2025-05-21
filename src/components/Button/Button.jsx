import css from './Button.module.css';

function Button({text, onClick, children}) {
    return (
        <>
            <button onClick={onClick} className={css.button} type='button'>
                {text}
                {children}
            </button>
        </>
    )
};

export default Button;