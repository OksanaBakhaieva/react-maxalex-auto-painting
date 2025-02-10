import ServiceCard from '../ServiceCard/ServiceCard';
import Title from '../Title/Title';
import services from "../../../services.json";
import css from './Services.module.css';

function Services({services}) {
    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <Title variant="light" title="Discover our full range of custom vehicle solutions" />
                <ul className={css.list}>
                    {services.map(({id,icon,title,text}) => (
                            <>
                                <li key={id} className={css.item}>
                                    <ServiceCard
                                        icon={icon}
                                        title={title}
                                        text={text}
                                    />
                                </li>
                            </>
                        )
                    )}
                </ul>
            </div>
        </div>
    )
};

export default Services;