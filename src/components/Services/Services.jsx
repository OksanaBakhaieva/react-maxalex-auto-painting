import ServiceCard from '../ServiceCard/ServiceCard';
import Title from '../Title/Title';
import servicesData from "../../../services.json";
import css from './Services.module.css';

function Services({ services=servicesData }) {
    if (!services || Object.keys(services).length === 0) {
        return <p className="css.error">No services available.</p>
    }
    return (
        <div className={css.container}>
                <Title variant="light" title="Our Services" />
                <h4 className={css.subtitle}>Discover our full range of custom vehicle solutions</h4>
         
                    <ul className={css.list}>
                    {/*Object.entries() transforms this object into an array[["Bodywork", [...]], ["Mechanical Services", [...]] ]*/}

                    {Object.entries(services).map(([category, serviceList]) => (
                        <li key={category} className={css.item}>
                            <h2 className={css.title}> {category}</h2>
                            <div className={css.service_container}>
                                {serviceList.map(({ id, icon, title, text }) => (
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
    )
};

export default Services;