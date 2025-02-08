import css from './Title.module.css';

function Title({ title }) {
    return (
        <>
            <h2 className={css.title}>{title}</h2>
        </>
    )
};

export default Title;