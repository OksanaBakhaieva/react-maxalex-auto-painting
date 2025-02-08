import css from './ServiceCard.module.css';

function ServiceCard({icon,title,text}) {
    return (
        <div className={css.container}>
            <i className={css.icon}>{icon}</i>
            <h4 className={css.title}>{title}</h4>
            <p className={css.text}>{text}</p>
        </div>
    )
};

export default ServiceCard;