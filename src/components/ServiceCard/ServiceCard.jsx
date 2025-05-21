import css from './ServiceCard.module.css';

function ServiceCard({icon, title, text}) {
    return (
        <div className={css.container}>
            <img src={icon} alt="" className={css.icon}/>
            <h4 className={css.title}>{title}</h4>
            <p className={css.text}>{text}</p>
        </div>
    )
};

export default ServiceCard;