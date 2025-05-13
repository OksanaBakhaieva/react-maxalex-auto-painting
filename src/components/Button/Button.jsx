import css from './Button.module.css';

function Button({text, onClick}) {
    return (
        <>
            <button onClick={onClick} className={css.button} type='button'>
                {text} 
            </button>
        </>
    )
};

export default Button;