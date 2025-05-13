import css from './Button.module.css';

function Button({text}) {
    return (
        <>
            <button className={css.button} type='button'>
                {text} 
            </button>
        </>
    )
};

export default Button;