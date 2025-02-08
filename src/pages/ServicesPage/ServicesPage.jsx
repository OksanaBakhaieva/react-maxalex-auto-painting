import Title from '../../components/Title/Title';
import Services from '../../components/Services/Services';
import FAQ from '../../components/FAQ/FAQ';
import css from './ServicesPage.module.css';

function ServicesPage() {
    return (
        <div className={css.container}>
            <h4 className={css.subtitle}>Our Services</h4>
            <Title title="Discover our full range of custom vehicle solutions" />
            <Services />
            <FAQ/>
        </div>
    )
};

export default ServicesPage;