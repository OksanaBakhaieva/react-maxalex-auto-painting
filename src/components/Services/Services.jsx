import ServiceCard from '../ServiceCard/ServiceCard';
import Title from '../Title/Title';
import services from "../../../services.json";
import css from './Services.module.css';

function Services({services}) {
    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <Title variant="light" title="Services offered" />
                <ul className={css.list}>
                    {/*Object.entries() transforms this object into an array[["Bodywork", [...]], ["Mechanical Services", [...]] ]*/}

                    {Object.entries(services).map(([category, services]) => (
                        <li key={category} className={css.item}>
                            <h2 className={css.title}> {category}</h2>
                            <div className={css.service_container}>
                                {services.map(({ id, icon, title, text }) => (
                                    <ServiceCard 
                                    key={id} 
                                    icon={icon} 
                                    title={title} 
                                    text={text} 
                                    />
                                ))}
                            </div>
                            
                        </li>
                                                
                    )
                )}                     
                </ul>
            </div>
        </div>
    )
};

export default Services;